const express = require("express");
const cors = require("cors");
const path = require("path");
const satellite = require("satellite.js");

const app = express();
app.use(cors());
app.use(express.json());

// Serve client static files
app.use(express.static(path.join(__dirname, "../satellite/client")));

// =============================================================================
// IMPORT SATELLITE DATA — Single source of truth from client/satelliteData.js
// =============================================================================

const ISRO_SATELLITES = require(path.join(__dirname, "../satellite/client/satelliteData.js"));

// =============================================================================
// DATABASE ENRICHMENT — Only fills computed/missing values (never overrides real data)
// =============================================================================
ISRO_SATELLITES.forEach((sat, index) => {
  if (!sat.noradId) sat.noradId = 90000 + index;
  if (!sat.period) {
    if (sat.isDeepSpace) {
      sat.period = 1440 * 10;
    } else {
      sat.period = 0.0001658 * Math.sqrt(Math.pow(6371 + sat.altitude, 3));
    }
  }
  // GSO satellites need inclinedGEO flag for figure-8 rendering
  if (sat.orbitType === "GSO" && sat.inclinedGEO === undefined) {
    sat.inclinedGEO = true;
  }
});

// =============================================================================
// SGP4 PROPAGATION USING satellite.js
// =============================================================================

const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

const LIVE_TRACK_CACHE_TTL_MS = 2 * 60 * 60 * 1000;
let liveTrackCache = {
  expiresAt: 0,
  byNorad: new Map()
};

async function getLiveTrackedNoradMap() {
  if (Date.now() < liveTrackCache.expiresAt && liveTrackCache.byNorad.size > 0) {
    return liveTrackCache.byNorad;
  }

  const activeWithNorad = ISRO_SATELLITES
    .filter(s => s.status === "active" && Number.isInteger(s.noradId));

  const byNorad = new Map();
  const BATCH_SIZE = 10;

  for (let i = 0; i < activeWithNorad.length; i += BATCH_SIZE) {
    const batch = activeWithNorad.slice(i, i + BATCH_SIZE);

    const checks = await Promise.all(batch.map(async sat => {
      const url = `https://celestrak.org/NORAD/elements/gp.php?CATNR=${sat.noradId}&FORMAT=json`;
      try {
        const response = await fetch(url);
        if (!response.ok) return [sat.noradId, false];

        const text = await response.text();
        let parsed = [];
        try {
          parsed = JSON.parse(text);
        } catch (_e) {
          return [sat.noradId, false];
        }

        return [sat.noradId, Array.isArray(parsed) && parsed.length > 0];
      } catch (_e) {
        return [sat.noradId, false];
      }
    }));

    checks.forEach(([noradId, tracked]) => byNorad.set(noradId, tracked));
  }

  // If upstream lookup is unavailable/rate-limited and returns no tracked objects,
  // fall back to local TLE presence to avoid zeroing all dashboard counts.
  const trackedCount = Array.from(byNorad.values()).filter(Boolean).length;
  if (trackedCount === 0) {
    activeWithNorad.forEach(sat => {
      byNorad.set(sat.noradId, Boolean(sat.tle1 && sat.tle2));
    });
  }

  liveTrackCache = {
    expiresAt: Date.now() + LIVE_TRACK_CACHE_TTL_MS,
    byNorad
  };

  return byNorad;
}

function calculatePosition(sat, timeOffset = 0) {
  const now = new Date();
  now.setMinutes(now.getMinutes() + timeOffset);

  // GEO satellites - use assigned longitude
  if ((sat.orbitType === "GEO" || sat.orbitType === "GSO") && sat.geoLongitude !== undefined && !sat.tle1) {
    return getGEOPosition(sat, now);
  }

  // Deep space missions
  if (sat.isDeepSpace) {
    return getDeepSpacePosition(sat, now);
  }

  // LEO/MEO satellites - proper SGP4 propagation
  if (sat.tle1 && sat.tle2) {
    return propagateSGP4(sat, now);
  }

  // Fallback
  return getEstimatedPosition(sat, now);
}

function propagateSGP4(sat, time) {
  try {
    const satrec = satellite.twoline2satrec(sat.tle1, sat.tle2);
    const positionAndVelocity = satellite.propagate(satrec, time);

    if (!positionAndVelocity.position) return null;

    const gmst = satellite.gstime(time);
    const positionGd = satellite.eciToGeodetic(positionAndVelocity.position, gmst);

    return {
      latitude: satellite.degreesLat(positionGd.latitude),
      longitude: satellite.degreesLong(positionGd.longitude),
      altitude: positionGd.height
    };
  } catch (e) {
    console.error(`SGP4 error for ${sat.name}:`, e.message);
    return getEstimatedPosition(sat, time);
  }
}

function getGEOPosition(sat, time) {
  let latitude = 0;
  let longitude = sat.geoLongitude;

  if (sat.inclinedGEO && sat.inclination) {
    const dayFraction = (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds()) / 86400;
    let phase = 0;
    if (sat.tle2) {
      try {
        const raan = parseFloat(sat.tle2.substring(17, 25));
        phase = raan * DEG_TO_RAD;
      } catch(e) {}
    }
    const angle = (dayFraction * 2 * Math.PI) + phase;
    latitude = sat.inclination * Math.sin(angle);
    longitude = sat.geoLongitude + (sat.inclination / 10) * Math.sin(2 * angle);
  }

  return {
    latitude: latitude,
    longitude: longitude,
    altitude: 35786
  };
}

function getDeepSpacePosition(sat, time) {
  // Aditya-L1 at Sun-Earth L1 point (~1.5M km)
  if (sat.name.includes("Aditya")) {
    const dayOfYear = Math.floor((time - new Date(time.getFullYear(), 0, 0)) / 86400000);
    const sunLon = ((280 + 360 * dayOfYear / 365.25) % 360) - 180;
    return { latitude: 0, longitude: sunLon, altitude: 1500000 };
  }
  // Chandrayaan-2 orbiter — approximate lunar orbit position
  if (sat.name.includes("Chandrayaan-2")) {
    const dayOfYear = Math.floor((time - new Date(time.getFullYear(), 0, 0)) / 86400000);
    // Moon completes orbit in ~27.3 days
    const moonLon = ((dayOfYear / 27.3) * 360 + 45) % 360 - 180;
    const moonLat = 5.1 * Math.sin((dayOfYear / 27.3) * 2 * Math.PI);
    return { latitude: moonLat, longitude: moonLon, altitude: 384400 };
  }
  return null;
}

function getEstimatedPosition(sat, time) {
  let alt = sat.altitude || 500;
  let period = sat.period;

  if (!period || period <= 0) {
    period = 0.0001658 * Math.sqrt(Math.pow(6371 + alt, 3));
  }

  const orbitPhase = (time.getTime() / 1000) % (period * 60);
  const angleInOrbit = (orbitPhase / (period * 60)) * 360;
  const inc = sat.inclination || 0;

  const latitude = inc * Math.sin(angleInOrbit * DEG_TO_RAD);
  const gmst = satellite.gstime(time);
  const gmstDeg = gmst * RAD_TO_DEG;
  const longitude = ((angleInOrbit - gmstDeg + 540) % 360) - 180;

  return {
    latitude: latitude,
    longitude: longitude,
    altitude: sat.altitude
  };
}

// =============================================================================
// ORBIT CATEGORY CLASSIFICATION
// =============================================================================

function getOrbitCategory(sat) {
  // Trust explicit source classification first; infer only when missing.
  if (sat.orbitType) {
    const declaredType = String(sat.orbitType).toUpperCase();
    if (["LEO", "SSO", "GEO", "GSO", "HEO"].includes(declaredType)) {
      return declaredType;
    }
  }

  if (sat.isDeepSpace) return "HEO";
  if (sat.altitude >= 30000) {
    if (sat.inclinedGEO || (sat.inclination && sat.inclination > 5)) return "GSO";
    return "GEO";
  }
  if (sat.inclination && sat.inclination >= 96 && sat.inclination <= 100) return "SSO";
  return "LEO";
}

// =============================================================================
// ORBIT PATH GENERATION
// =============================================================================

function generateOrbitPath(sat, numPoints = 400) {
  const category = getOrbitCategory(sat);

  if (category === "GEO") return [];
  if (category === "GSO") return generateGSOTrack(sat, 180);
  if (sat.tle1 && sat.tle2) return generateClosedOrbit(sat, numPoints);
  return generateEstimatedClosedOrbit(sat, numPoints);
}

function generateClosedOrbit(sat, numPoints = 150) {
  try {
    const satrec = satellite.twoline2satrec(sat.tle1, sat.tle2);
    const now = new Date();
    const gmstFixed = satellite.gstime(now);
    const periodMs = (sat.period || 96) * 60 * 1000;

    const points = [];
    for (let i = 0; i <= numPoints; i++) {
      const t = new Date(now.getTime() + (i / numPoints) * periodMs);
      const posVel = satellite.propagate(satrec, t);
      if (!posVel.position) continue;

      const posGd = satellite.eciToGeodetic(posVel.position, gmstFixed);
      points.push({
        latitude: satellite.degreesLat(posGd.latitude),
        longitude: satellite.degreesLong(posGd.longitude),
        altitude: posGd.height
      });
    }

    return points;
  } catch (e) {
    console.error(`Orbit error for ${sat.name}:`, e.message);
    return generateEstimatedClosedOrbit(sat, numPoints);
  }
}

function generateGSOTrack(sat, numPoints) {
  const points = [];
  const periodMinutes = 1440;
  for (let i = 0; i <= numPoints; i++) {
    const timeOffset = (i / numPoints) * periodMinutes - periodMinutes / 2;
    const pos = calculatePosition(sat, timeOffset);
    if (pos) points.push({ time: timeOffset, ...pos });
  }
  return points;
}

function generateEstimatedClosedOrbit(sat, numPoints = 150) {
  const EARTH_RADIUS = 6371;
  const alt = sat.altitude || 500;
  const inc = (sat.inclination || 45) * DEG_TO_RAD;
  const radius = EARTH_RADIUS + alt;
  const raan = 0;

  const now = new Date();
  const gmst = satellite.gstime(now);

  const points = [];
  for (let i = 0; i <= numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;

    const x_orb = radius * Math.cos(angle);
    const y_orb = radius * Math.sin(angle);

    const x_eci = x_orb * Math.cos(raan) - y_orb * Math.cos(inc) * Math.sin(raan);
    const y_eci = x_orb * Math.sin(raan) + y_orb * Math.cos(inc) * Math.cos(raan);
    const z_eci = y_orb * Math.sin(inc);

    const r = Math.sqrt(x_eci * x_eci + y_eci * y_eci + z_eci * z_eci);
    const lat = Math.asin(z_eci / r) * RAD_TO_DEG;
    const lon = ((Math.atan2(y_eci, x_eci) - gmst) * RAD_TO_DEG + 540) % 360 - 180;

    points.push({ latitude: lat, longitude: lon, altitude: alt });
  }

  return points;
}

// =============================================================================
// API ROUTER
// =============================================================================

const router = express.Router();

router.get("/satellites", async (req, res) => {
  try {
    const liveTrackedByNorad = await getLiveTrackedNoradMap();

    const results = ISRO_SATELLITES.map(sat => {
      const position = calculatePosition(sat);
      const isLiveTracked = Number.isInteger(sat.noradId)
        ? liveTrackedByNorad.get(sat.noradId) === true
        : false;

      return { ...sat, position, orbitCategory: getOrbitCategory(sat), isLiveTracked };
    }).filter(sat => sat.position !== null);

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to calculate satellite positions" });
  }
});

router.get("/satellites/:id/orbit", async (req, res) => {
  try {
    const satId = parseInt(req.params.id);
    const sat = ISRO_SATELLITES.find(s => s.noradId === satId);
    if (!sat) return res.status(404).json({ error: "Satellite not found" });
    const orbitPath = generateOrbitPath(sat);
    res.json({ satellite: sat.name, orbitType: sat.orbitType, path: orbitPath });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate orbit path" });
  }
});

router.get("/satellites/type/:orbitType", async (req, res) => {
  try {
    const orbitType = req.params.orbitType.toUpperCase();
    const satellites = ISRO_SATELLITES.filter(s => s.orbitType === orbitType);
    const results = satellites.map(sat => ({
      ...sat,
      position: calculatePosition(sat)
    })).filter(sat => sat.position !== null);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch satellites by type" });
  }
});

router.get("/statistics", async (req, res) => {
  const active = ISRO_SATELLITES.filter(s => s.status === "active");
  const stats = {
    total: ISRO_SATELLITES.length,
    active: active.length,
    inactive: ISRO_SATELLITES.length - active.length,
    byOrbitType: {
      LEO: ISRO_SATELLITES.filter(s => s.orbitType === "LEO").length,
      SSO: ISRO_SATELLITES.filter(s => s.orbitType === "SSO").length,
      GEO: ISRO_SATELLITES.filter(s => s.orbitType === "GEO").length,
      GSO: ISRO_SATELLITES.filter(s => s.orbitType === "GSO").length,
      HEO: ISRO_SATELLITES.filter(s => s.orbitType === "HEO").length
    },
    byPurpose: {}
  };
  ISRO_SATELLITES.forEach(sat => {
    const purpose = sat.purpose.split("(")[0].trim().split("/")[0].trim();
    stats.byPurpose[purpose] = (stats.byPurpose[purpose] || 0) + 1;
  });
  res.json(stats);
});

router.get("/reference-orbits/geo-ring", (req, res) => {
  const points = [];
  for (let i = 0; i <= 360; i += 1) {
    points.push({ latitude: 0, longitude: i - 180, altitude: 35786 });
  }
  res.json({ name: "Geostationary Ring", altitude: 35786, points });
});

router.get("/health", (req, res) => {
  res.json({ status: "ok", satellites: ISRO_SATELLITES.length });
});

// Mount router under both root and /api for Vercel/Local compatibility
app.use("/api", router);
app.use("/", router);

app.get("/api-health-check", (req, res) => {
  res.json({ status: "ok", message: "Global API entry point is active" });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    const active = ISRO_SATELLITES.filter(s => s.status === "active").length;
    const inactive = ISRO_SATELLITES.length - active;
    const sso = ISRO_SATELLITES.filter(s => s.orbitType === "SSO").length;
    const geo = ISRO_SATELLITES.filter(s => s.orbitType === "GEO").length;
    console.log(`
  ╔════════════════════════════════════════════════════════════╗
  ║           ISRO SATELLITE TRACKER SERVER                    ║
  ╠════════════════════════════════════════════════════════════╣
  ║  Server running on http://localhost:${PORT}                ║
  ║  Total satellites: ${ISRO_SATELLITES.length.toString().padEnd(38)}║
  ║  Active: ${active.toString().padEnd(48)}                   ║
  ║  Inactive: ${inactive.toString().padEnd(46)}               ║
  ║  SSO: ${sso.toString().padEnd(51)}                         ║
  ║  GEO: ${geo.toString().padEnd(51)}                         ║
  ╠════════════════════════════════════════════════════════════╣
  ║  Endpoints:                                                ║
  ║    GET /satellites            - All with positions         ║
  ║    GET /satellites/:id/orbit  - Orbit path                 ║
  ║    GET /satellites/type/:type - Filter by orbit type       ║
  ║    GET /statistics            - Database statistics        ║
  ╚════════════════════════════════════════════════════════════╝
    `);
  });
}

module.exports = app;
