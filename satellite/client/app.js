Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NDI5NDNlMS0yMGJiLTQzM2YtYjhhYi03Y2Y1NjRmNmYwY2EiLCJpZCI6NDE4NTA5LCJpYXQiOjE3NzYyNDQ2OTV9.ZmeRnjzqMApUK0BHTDlnEW8crPHdZR8B1qDYkSo57yY";

// Orbit categorized colors
const ORBIT_COLORS = {
  LEO: Cesium.Color.fromCssColorString("#ff00ff"), // Fuchsia/Neon Pink
  SSO: Cesium.Color.fromCssColorString("#00ff88"), // Emerald Green
  GEO: Cesium.Color.fromCssColorString("#ff8c00"), // Bright Orange
  GSO: Cesium.Color.fromCssColorString("#00d4ff"), // Sky Blue
  HEO: Cesium.Color.fromCssColorString("#ffffff")  // White
};

const ORBIT_NAMES = {
  LEO: "Low Earth Orbit",
  SSO: "Sun-Synchronous",
  GEO: "Geostationary",
  GSO: "Geosynchronous",
  HEO: "Highly Elliptical"
};

const API_BASE = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  ? (window.location.port === "3000" ? "" : "http://localhost:3000")
  : "/api";

// Image handling — returns the satellite image URL; onerror on img shows fallback
function getCardImage(sat) {
  if (sat.image && sat.image.length > 0) return sat.image;
  return ""; // Will trigger no-image fallback in the card
}

// States
let showOrbits = true;
let showActive = true;
let showInactive = true;
let selectedEntity = null;
let highlightedOrbit = null; // Current orbit filter highlight (e.g., "LEO")

const activeSatellites = [];
const inactiveSatellites = [];
const orbitEntities = [];
const entityToSatData = new Map();
const entityToOrbit = new Map();
let allSatelliteData = []; // Store all satellite data for counts

initLiveBackground();

// Cesium viewer setup
const viewer = new Cesium.Viewer("cesiumContainer", {
  timeline: false,
  animation: false,
  baseLayerPicker: false,
  geocoder: false,
  homeButton: false,
  sceneModePicker: false,
  navigationHelpButton: false,
  fullscreenButton: false,
  selectionIndicator: false,
  infoBox: false
});

viewer.scene.globe.enableLighting = false;
viewer.scene.globe.maximumScreenSpaceError = 1.5;
viewer.scene.globe.depthTestAgainstTerrain = false;
viewer.scene.globe.showGroundAtmosphere = true;
viewer.scene.globe.baseColor = Cesium.Color.fromCssColorString("#0a1628");
viewer.scene.postProcessStages.fxaa.enabled = true;

viewer.scene.skyBox.show = false;
viewer.scene.skyAtmosphere.show = false;
viewer.scene.sun.show = false;
viewer.scene.moon.show = false;
viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT;
viewer.scene.globe.baseColor = Cesium.Color.TRANSPARENT;

// =============================================================================
// LOAD SATELLITES
// =============================================================================

function initLiveBackground() {
  const canvas = document.getElementById("liveBackground");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.length = 0;

    const count = Math.floor((canvas.width * canvas.height) / 7800);
    for (let i = 0; i < count; i += 1) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.2,
        s: Math.random() * 0.006 + 0.0015,
        p: Math.random() * Math.PI * 2,
        a: Math.random() * 0.22 + 0.22
      });
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      const alpha = star.a + Math.sin(t * star.s + star.p) * 0.06;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(226,232,240,${Math.max(0.05, alpha)})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(draw);
}

async function loadSatellites() {
  const loading = document.getElementById("loading");

  const COUNTABLE_ORBITS = new Set(["LEO", "SSO", "GEO", "GSO"]);
  const isCountableActiveSatellite = (sat, cat) => {
    const tracked = sat.isLiveTracked === undefined ? Number.isInteger(sat.noradId) : sat.isLiveTracked === true;
    return sat.status === "active" && tracked && COUNTABLE_ORBITS.has(cat);
  };

  try {
    const res = await fetch(`${API_BASE}/satellites`);
    const satellites = await res.json();
    allSatelliteData = satellites;

    console.log("Loaded raw:", satellites.length);
    
    // Show all satellites that have complete metadata
    const filteredSatellites = satellites.filter(sat => {
      const isActive = sat.status === "active";
      const hasFullInfo = sat.mass && sat.mass !== "—" && 
                          sat.launchVehicle && sat.launchVehicle !== "—" &&
                          sat.purpose && sat.purpose !== "—";
      return isActive || hasFullInfo;
    });

    console.log("Showing filtered:", filteredSatellites.length);

    let activeCount = 0, inactiveCount = 0;
    let leoCount = 0, ssoCount = 0, geoCount = 0, gsoCount = 0;

    for (const sat of filteredSatellites) {
      if (!sat.position) continue;

      const { latitude, longitude, altitude } = sat.position;
      const position = Cesium.Cartesian3.fromDegrees(longitude, latitude, altitude * 1000);
      const cat = sat.orbitCategory || "LEO";
      const color = ORBIT_COLORS[cat] || ORBIT_COLORS.LEO;
      const isActive = sat.status === "active";

      if (isCountableActiveSatellite(sat, cat)) {
        activeCount++;
        if (cat === "LEO") leoCount++;
        if (cat === "SSO") ssoCount++;
        if (cat === "GEO") geoCount++;
        if (cat === "GSO") gsoCount++;
      } else if (!isActive) {
        inactiveCount++;
      }

      // Satellite entity
      const entity = viewer.entities.add({
        name: sat.name,
        position: position,
        point: {
          pixelSize: isActive ? 8 : 5,
          color: isActive ? color : color.withAlpha(0.35),
          outlineColor: Cesium.Color.WHITE.withAlpha(0.3),
          outlineWidth: 1,
          disableDepthTestDistance: Number.POSITIVE_INFINITY
        },
        properties: { isActive, satId: sat.noradId, orbitCat: cat }
      });

      entityToSatData.set(entity, sat);

      if (isActive) {
        activeSatellites.push(entity);
      } else {
        inactiveSatellites.push(entity);
      }

      // Orbit paths for LEO, SSO, GSO
      if (cat !== "GEO" && cat !== "HEO" && sat.period > 0) {
        addOrbitPath(sat, entity, color, isActive, cat);
      }
    }

    // GEO ring
    loadGEORing();

    // Update counts
    document.getElementById("activeCount").textContent = activeCount;
    document.getElementById("inactiveCount").textContent = inactiveCount;
    document.getElementById("leoCount").textContent = leoCount;
    document.getElementById("ssoCount").textContent = ssoCount;
    document.getElementById("geoCount").textContent = geoCount;
    document.getElementById("gsoCount").textContent = gsoCount;
    document.getElementById("bottomBar").style.display = "flex";
    loading.style.display = "none";

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(78, 15, 22000000),
      duration: 2
    });

  } catch (err) {
    console.error("Error:", err);
    loading.innerHTML = '<div style="color:#ff6464;font-size:13px;">Server not running — <code style="color:#00ff88">cd satellite/server && npm start</code></div>';
    loading.style.background = "rgba(0,0,0,0.9)";
    loading.style.borderRadius = "12px";
    loading.style.padding = "16px 24px";
  }
}

// =============================================================================
// ORBITS
// =============================================================================

async function addOrbitPath(sat, parentEntity, color, isActive, cat) {
  try {
    const res = await fetch(`${API_BASE}/satellites/${sat.noradId}/orbit`);
    const data = await res.json();
    if (!data.path || data.path.length < 2) return;

    const positions = data.path.map(p =>
      Cesium.Cartesian3.fromDegrees(p.longitude, p.latitude, (p.altitude || sat.altitude) * 1000)
    );

    const orbitEntity = viewer.entities.add({
      polyline: {
        positions,
        width: 1.5,
        material: color.withAlpha( isActive ? 0.35 : 0.15 )
      },
      properties: { isActive, satId: sat.noradId, orbitCat: cat }
    });

    orbitEntities.push({ entity: orbitEntity, isActive, satId: sat.noradId, cat });
    entityToOrbit.set(parentEntity, orbitEntity);
  } catch (e) { /* silent */ }
}

async function loadGEORing() {
  try {
    const res = await fetch(`${API_BASE}/reference-orbits/geo-ring`);
    const data = await res.json();
    if (!data.points || data.points.length < 2) return;

    const positions = data.points.map(p =>
      Cesium.Cartesian3.fromDegrees(p.longitude, p.latitude, p.altitude * 1000)
    );

    const ringEntity = viewer.entities.add({
      polyline: {
        positions,
        width: 1,
        material: ORBIT_COLORS.GEO.withAlpha(0.1)
      },
      properties: { isGEORing: true }
    });

    orbitEntities.push({ entity: ringEntity, isActive: true, satId: "geo-ring", cat: "GEO" });
  } catch (e) { console.error("GEO ring error:", e); }
}

// =============================================================================
// SATELLITE SELECTION
// =============================================================================

const clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

clickHandler.setInputAction(function(click) {
  const picked = viewer.scene.pick(click.position);

  if (Cesium.defined(picked) && picked.id && entityToSatData.has(picked.id)) {
    selectSatellite(picked.id);
  } else {
    deselectSatellite();
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

function selectSatellite(entity) {
  if (selectedEntity) deselectSatellite();
  selectedEntity = entity;

  const sat = entityToSatData.get(entity);
  if (!sat) return;

  const cat = sat.orbitCategory || "LEO";
  const catLower = cat.toLowerCase();

  // Populate card
  document.getElementById("cardName").textContent = sat.name;

  // Handle image with fallback
  const cardImg = document.getElementById("cardImage");
  const cardImageWrap = document.getElementById("cardImageWrap");
  const imgUrl = getCardImage(sat);

  // Remove any existing fallback
  const existingFallback = cardImageWrap.querySelector('.no-image-fallback');
  if (existingFallback) existingFallback.remove();

  if (imgUrl) {
    cardImg.style.display = "block";
    cardImg.src = imgUrl;
    cardImg.onerror = function() {
      // Image failed — show styled fallback
      this.style.display = "none";
      showNoImageFallback(sat.name);
    };
  } else {
    cardImg.style.display = "none";
    showNoImageFallback(sat.name);
  }

  function showNoImageFallback(name) {
    const fb = document.createElement("div");
    fb.className = "no-image-fallback";
    fb.textContent = name.substring(0, 6).toUpperCase();
    cardImageWrap.insertBefore(fb, cardImageWrap.firstChild);
  }

  // Orbit pill
  const orbitPill = document.getElementById("cardOrbitPill");
  orbitPill.textContent = cat;
  orbitPill.className = "card-orbit-pill " + catLower;

  // Status pill
  const statusPill = document.getElementById("cardStatusPill");
  statusPill.textContent = sat.status.toUpperCase();
  statusPill.className = "card-status-pill " + (sat.status === "active" ? "pill-active" : "pill-inactive");

  // Metadata
  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val || "—";
  };

  setEl("cardAlt", sat.altitude ? sat.altitude.toLocaleString() + " km" : "—");
  setEl("cardRocket", sat.launchVehicle);
  setEl("cardMass", sat.mass);
  setEl("cardLife", sat.missionLife);
  setEl("cardPurpose", sat.purpose);
  setEl("cardLaunch", sat.launchDate);

  // Wiki Link
  const wikiLink = document.getElementById("cardWiki");
  if (sat.wikiUrl) {
    wikiLink.href = sat.wikiUrl;
    wikiLink.style.display = "flex";
  } else {
    wikiLink.style.display = "none";
  }

  document.getElementById("satCard").style.display = "block";

  // Highlight satellite
  const color = ORBIT_COLORS[cat] || ORBIT_COLORS.LEO;
  entity.point.pixelSize = 16;
  entity.point.outlineWidth = 2;
  entity.point.outlineColor = Cesium.Color.WHITE;
  entity.point.color = color;

  // Highlight its orbit
  const thisOrbit = entityToOrbit.get(entity);
  if (thisOrbit) {
    thisOrbit.polyline.width = 3;
    thisOrbit.polyline.material = color.withAlpha(0.8);
  }

  // Dim everything else
  viewer.entities.values.forEach(e => {
    if (e === entity || e === thisOrbit) return;

    if (e.point && entityToSatData.has(e)) {
      const eSat = entityToSatData.get(e);
      const eColor = ORBIT_COLORS[eSat.orbitCategory] || ORBIT_COLORS.LEO;
      e.point.color = eColor.withAlpha(0.08);
      e.point.outlineColor = Cesium.Color.TRANSPARENT;
    }

    if (e.polyline && e !== thisOrbit) {
      const eCat = e.properties && e.properties.orbitCat ? e.properties.orbitCat.getValue() : null;
      const eColor = ORBIT_COLORS[eCat] || ORBIT_COLORS.LEO;
      e.polyline.material = eColor.withAlpha(0.03);
    }
  });
}

function deselectSatellite() {
  if (!selectedEntity) return;

  document.getElementById("satCard").style.display = "none";

  // Restore all
  viewer.entities.values.forEach(e => {
    const satData = entityToSatData.get(e);
    if (satData) {
      const cat = satData.orbitCategory || "LEO";
      const color = ORBIT_COLORS[cat] || ORBIT_COLORS.LEO;
      const isActive = satData.status === "active";

      e.point.pixelSize = isActive ? 8 : 5;
      e.point.color = isActive ? color : color.withAlpha(0.35);
      e.point.outlineWidth = 1;
      e.point.outlineColor = Cesium.Color.WHITE.withAlpha(0.3);
    }

    if (e.polyline) {
      const eCat = e.properties && e.properties.orbitCat ? e.properties.orbitCat.getValue() : "LEO";
      const isRing = e.properties && e.properties.isGEORing && e.properties.isGEORing.getValue();
      const eColor = ORBIT_COLORS[eCat] || ORBIT_COLORS.LEO;
      e.polyline.width = eCat === "GSO" ? 1.5 : 1;
      e.polyline.material = isRing ? eColor.withAlpha(0.1) : eColor.withAlpha(0.2);
    }
  });

  selectedEntity = null;
}

document.getElementById("cardClose").addEventListener("click", deselectSatellite);

// =============================================================================
// TOGGLE BUTTONS
// =============================================================================

document.getElementById("toggleOrbits").addEventListener("click", function() {
  showOrbits = !showOrbits;
  this.classList.toggle("active", showOrbits);
  orbitEntities.forEach(o => {
    const vis = showOrbits && ((o.isActive && showActive) || (!o.isActive && showInactive) || o.satId === "geo-ring");
    o.entity.show = vis;
  });
});

document.getElementById("toggleActive").addEventListener("click", function() {
  showActive = !showActive;
  this.classList.toggle("active", showActive);
  activeSatellites.forEach(e => e.show = showActive);
  orbitEntities.forEach(o => {
    if (o.isActive && o.satId !== "geo-ring") o.entity.show = showOrbits && showActive;
  });
  updateInactiveCountVisibility();
});

document.getElementById("toggleInactive").addEventListener("click", function() {
  showInactive = !showInactive;
  this.classList.toggle("active", showInactive);
  inactiveSatellites.forEach(e => e.show = showInactive);
  orbitEntities.forEach(o => {
    if (!o.isActive) o.entity.show = showOrbits && showInactive;
  });
  updateInactiveCountVisibility();
});

// Inactive count only visible when inactive=ON and active=OFF
function updateInactiveCountVisibility() {
  const inactiveWrap = document.getElementById("inactiveCountWrap");
  inactiveWrap.style.display = (showInactive && !showActive) ? "flex" : "none";
}

// =============================================================================
// CLICKABLE ORBIT FILTERS IN BOTTOM BAR
// =============================================================================

document.querySelectorAll(".stat.clickable").forEach(el => {
  el.addEventListener("click", function() {
    const orbitType = this.dataset.orbit;

    // Toggle: clicking same orbit again clears the filter
    if (highlightedOrbit === orbitType) {
      highlightedOrbit = null;
      this.classList.remove("orbit-highlight");
      restoreAllVisibility();
      return;
    }

    // Clear other highlights
    document.querySelectorAll(".stat.clickable").forEach(s => s.classList.remove("orbit-highlight"));
    highlightedOrbit = orbitType;
    this.classList.add("orbit-highlight");

    // Highlight only matching orbit satellites, dim others
    viewer.entities.values.forEach(e => {
      const satData = entityToSatData.get(e);
      if (satData) {
        const cat = satData.orbitCategory || "LEO";
        const color = ORBIT_COLORS[cat] || ORBIT_COLORS.LEO;
        const isActive = satData.status === "active";

        if (cat === orbitType) {
          // Matching orbit — show brightly
          e.show = true;
          e.point.pixelSize = isActive ? 10 : 6;
          e.point.color = color;
          e.point.outlineWidth = 2;
          e.point.outlineColor = Cesium.Color.WHITE.withAlpha(0.5);
        } else {
          // Non-matching — dim significantly
          e.point.pixelSize = isActive ? 4 : 2;
          e.point.color = color.withAlpha(0.06);
          e.point.outlineColor = Cesium.Color.TRANSPARENT;
        }
      }

      if (e.polyline) {
        const eCat = e.properties && e.properties.orbitCat ? e.properties.orbitCat.getValue() : "LEO";
        const isRing = e.properties && e.properties.isGEORing && e.properties.isGEORing.getValue();
        const eColor = ORBIT_COLORS[eCat] || ORBIT_COLORS.LEO;

        if (eCat === orbitType || (orbitType === "GEO" && isRing)) {
          e.polyline.width = 2.5;
          e.polyline.material = eColor.withAlpha(0.5);
          e.show = true;
        } else {
          e.polyline.material = eColor.withAlpha(0.02);
        }
      }
    });
  });
});

function restoreAllVisibility() {
  viewer.entities.values.forEach(e => {
    const satData = entityToSatData.get(e);
    if (satData) {
      const cat = satData.orbitCategory || "LEO";
      const color = ORBIT_COLORS[cat] || ORBIT_COLORS.LEO;
      const isActive = satData.status === "active";

      e.show = (isActive && showActive) || (!isActive && showInactive);
      e.point.pixelSize = isActive ? 8 : 5;
      e.point.color = isActive ? color : color.withAlpha(0.35);
      e.point.outlineWidth = 1;
      e.point.outlineColor = Cesium.Color.WHITE.withAlpha(0.3);
    }

    if (e.polyline) {
      const eCat = e.properties && e.properties.orbitCat ? e.properties.orbitCat.getValue() : "LEO";
      const isRing = e.properties && e.properties.isGEORing && e.properties.isGEORing.getValue();
      const eColor = ORBIT_COLORS[eCat] || ORBIT_COLORS.LEO;

      e.polyline.width = eCat === "GSO" ? 1.5 : 1;
      e.polyline.material = isRing ? eColor.withAlpha(0.1) : eColor.withAlpha(0.2);
      const isActive = e.properties && e.properties.isActive ? e.properties.isActive.getValue() : true;
      e.show = showOrbits && ((isActive && showActive) || (!isActive && showInactive) || isRing);
    }
  });
}

// =============================================================================
// START
// =============================================================================

loadSatellites();
