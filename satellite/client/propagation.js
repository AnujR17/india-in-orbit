/* 
  Static Propagation Logic for Client-Side Fallback
  Extracted from ISRO Satellite Tracker Server
*/

const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

// Database Enrichment Logic — only fills computed/missing values
function enrichSatData(satellites) {
    satellites.forEach((sat, index) => {
        if (!sat.noradId) sat.noradId = 90000 + index;
        if (!sat.period) {
            if (sat.isDeepSpace) {
                sat.period = 1440 * 10;
            } else {
                sat.period = 0.0001658 * Math.sqrt(Math.pow(6371 + sat.altitude, 3));
            }
        }
        if (sat.orbitType === "GSO" && sat.inclinedGEO === undefined) {
            sat.inclinedGEO = true;
        }
        sat.orbitCategory = getOrbitCategory(sat);
    });
    return satellites;
}


function calculatePosition(sat, timeOffset = 0) {
    const now = new Date();
    now.setMinutes(now.getMinutes() + timeOffset);

    if ((sat.orbitType === "GEO" || sat.orbitType === "GSO") && sat.geoLongitude !== undefined && !sat.tle1) {
        return getGEOPosition(sat, now);
    }
    if (sat.isDeepSpace) {
        return getDeepSpacePosition(sat, now);
    }
    if (sat.tle1 && sat.tle2) {
        return propagateSGP4(sat, now);
    }
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
            } catch (e) {}
        }
        const angle = (dayFraction * 2 * Math.PI) + phase;
        latitude = sat.inclination * Math.sin(angle);
        longitude = sat.geoLongitude + (sat.inclination / 10) * Math.sin(2 * angle);
    }
    return { latitude, longitude, altitude: 35786 };
}

function getDeepSpacePosition(sat, time) {
    if (sat.name.includes("Aditya")) {
        const dayOfYear = Math.floor((time - new Date(time.getFullYear(), 0, 0)) / 86400000);
        const sunLon = ((280 + 360 * dayOfYear / 365.25) % 360) - 180;
        return { latitude: 0, longitude: sunLon, altitude: 1500000 };
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
    return { latitude, longitude, altitude: alt };
}

function getOrbitCategory(sat) {
    if (sat.isDeepSpace) return "HEO";
    if (sat.altitude >= 30000) {
        if (sat.inclinedGEO || (sat.inclination && sat.inclination > 5)) return "GSO";
        return "GEO";
    }
    if (sat.inclination && sat.inclination >= 96 && sat.inclination <= 100) return "SSO";
    return "LEO";
}

function generateOrbitPath(sat, numPoints = 150) {
    const category = sat.orbitCategory || getOrbitCategory(sat);
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
