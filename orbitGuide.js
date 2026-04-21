/* =========================================================
   Orbit Guide — Cesium-based scroll-driven orbit explainer
   Replaces the old Three.js orbit mini-scene
   ========================================================= */

(function () {
  "use strict";

  const CESIUM_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiODFkMWYyMS03OWEwLTQwN2MtODEzZi1lYzViZDMzOWJmZmMiLCJpZCI6NDExMTI2LCJpYXQiOjE3NzQ4NTM3OTJ9.IguolnkUvfvrvExthsOAtizKAhm-oG4-9bOz36PQMx4";

  const ORBIT_COLORS = {
    LEO: "#ff00ff",
    SSO: "#00ff88",
    GEO: "#ff8c00",
    GSO: "#00d4ff",
    HEO: "#ffffff"
  };

  const STEPS = ["intro", "leo", "sso", "geo", "cluster", "nisar"];

  let viewer = null;
  let satellites = [];
  let entityMap = new Map();
  let currentStep = -1;
  let isInitialized = false;
  let isVisible = false;

  /* ── helpers ────────────────────────────────────────────── */
  function cesiumColor(hex, alpha) {
    return Cesium.Color.fromCssColorString(hex).withAlpha(alpha || 1);
  }

  function orbitCat(sat) {
    if (sat.isDeepSpace) return "HEO";
    if (sat.altitude >= 30000) {
      return (sat.inclination && sat.inclination > 5) ? "GSO" : "GEO";
    }
    if (sat.inclination && sat.inclination >= 96 && sat.inclination <= 100) return "SSO";
    return "LEO";
  }

  /* ── camera presets ────────────────────────────────────── */
  const CAMERA = {
    intro: { lon: 78, lat: 15, alt: 28000000, heading: 0, pitch: -90, duration: 2 },
    leo:   { lon: 78, lat: 30, alt: 4000000, heading: 0, pitch: -55, duration: 2.5 },
    sso:   { lon: 78, lat: 70, alt: 6000000, heading: 0, pitch: -70, duration: 2.5 },
    geo:   { lon: 78, lat: 0,  alt: 52000000, heading: 0, pitch: -90, duration: 2.5 },
    cluster:{ lon: 78, lat: 15, alt: 22000000, heading: 0, pitch: -90, duration: 2 },
    nisar: { lon: 78, lat: 20, alt: 3000000, heading: 0, pitch: -45, duration: 3 }
  };

  /* ── init ───────────────────────────────────────────────── */
  function initOrbitGuide() {
    const container = document.getElementById("orbitCesiumContainer");
    if (!container || typeof Cesium === "undefined") return;

    try {
      Cesium.Ion.defaultAccessToken = CESIUM_TOKEN;

      viewer = new Cesium.Viewer(container, {
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

      // Disable default interaction during guided mode
      viewer.scene.screenSpaceCameraController.enableRotate = false;
      viewer.scene.screenSpaceCameraController.enableZoom = false;
      viewer.scene.screenSpaceCameraController.enableTranslate = false;
      viewer.scene.screenSpaceCameraController.enableTilt = false;
      viewer.scene.screenSpaceCameraController.enableLook = false;

      loadSatellites();
      buildStepDots();
      isInitialized = true;

    } catch (e) {
      console.warn("OrbitGuide: Cesium init failed", e);
    }
  }

  /* ── load satellites ────────────────────────────────────── */
  function loadSatellites() {
    if (typeof ISRO_SATELLITES_DATA === "undefined" || !viewer) return;

    const enriched = typeof enrichSatData === "function"
      ? enrichSatData([...ISRO_SATELLITES_DATA])
      : ISRO_SATELLITES_DATA;

    satellites = enriched;

    // Keep the fixed NISAR card in sync with the main dataset.
    const nisarSat = satellites.find(s => String(s.name || "").toUpperCase().includes("NISAR"));
    if (nisarSat) {
      updateNisarCardFromData(nisarSat);
    }

    for (const sat of satellites) {
      const cat = orbitCat(sat);
      sat._cat = cat;
      const color = ORBIT_COLORS[cat] || ORBIT_COLORS.LEO;
      const isActive = sat.status === "active";
      if (sat.isDeepSpace) continue;

      // calculate position
      let pos = null;
      if (typeof calculatePosition === "function") {
        pos = calculatePosition(sat, 0);
      }
      if (!pos && sat.altitude) {
        // rough fallback
        const now = Date.now();
        const period = sat.period || (0.0001658 * Math.sqrt(Math.pow(6371 + (sat.altitude || 500), 3)));
        const angle = ((now / 1000) % (period * 60)) / (period * 60) * 360;
        const inc = sat.inclination || 0;
        pos = {
          latitude: inc * Math.sin(angle * Math.PI / 180),
          longitude: ((angle + 540) % 360) - 180,
          altitude: sat.altitude
        };
      }
      if (!pos) continue;

      const entity = viewer.entities.add({
        name: sat.name,
        position: Cesium.Cartesian3.fromDegrees(pos.longitude, pos.latitude, pos.altitude * 1000),
        point: {
          pixelSize: isActive ? 7 : 4,
          color: cesiumColor(color, isActive ? 0.95 : 0.35),
          outlineColor: Cesium.Color.WHITE.withAlpha(0.25),
          outlineWidth: 1,
          disableDepthTestDistance: Number.POSITIVE_INFINITY
        }
      });

      entityMap.set(sat.name, { entity, sat, cat });

      // orbit paths for non-GEO, non-deep-space
      if (cat !== "GEO" && cat !== "HEO" && typeof generateOrbitPath === "function") {
        try {
          const path = generateOrbitPath(sat, 120);
          if (path && path.length > 2) {
            const positions = path.map(p =>
              Cesium.Cartesian3.fromDegrees(p.longitude, p.latitude, (p.altitude || sat.altitude) * 1000)
            );
            viewer.entities.add({
              name: sat.name + "_orbit",
              polyline: {
                positions,
                width: 1.2,
                material: cesiumColor(color, isActive ? 0.25 : 0.1)
              }
            });
          }
        } catch (e) { /* silent */ }
      }
    }

    // GEO ring
    const geoPoints = [];
    for (let lon = -180; lon <= 180; lon += 2) {
      geoPoints.push(Cesium.Cartesian3.fromDegrees(lon, 0, 35786000));
    }
    viewer.entities.add({
      name: "geo_ring",
      polyline: {
        positions: geoPoints,
        width: 1,
        material: cesiumColor(ORBIT_COLORS.GEO, 0.12)
      }
    });

    // GSO figure-8 tracks
    satellites.filter(s => s._cat === "GSO" && typeof generateOrbitPath === "function").forEach(sat => {
      try {
        const path = generateOrbitPath(sat, 180);
        if (path && path.length > 2) {
          const positions = path.map(p =>
            Cesium.Cartesian3.fromDegrees(p.longitude, p.latitude, (p.altitude || 35786) * 1000)
          );
          viewer.entities.add({
            name: sat.name + "_orbit",
            polyline: { positions, width: 1.2, material: cesiumColor(ORBIT_COLORS.GSO, 0.15) }
          });
        }
      } catch (e) { /* silent */ }
    });

    // initial camera
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(78, 15, 28000000),
      duration: 0
    });
  }

  function updateNisarCardFromData(sat) {
    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el && value) el.textContent = String(value);
    };

    const formatDate = iso => {
      if (!iso) return "";
      const d = new Date(iso);
      if (Number.isNaN(d.getTime())) return iso;
      return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    };

    const orbit = sat.orbitType || "SSO";
    const status = (sat.status || "active").toUpperCase();
    const altitude = sat.altitude ? `${sat.altitude} km` : "";
    const mass = sat.mass || "";
    const launchDate = formatDate(sat.launchDate);
    const missionLife = sat.missionLife || "";

    setText("nisarCardName", sat.name);
    setText("nisarOrbitPill", orbit);
    setText("nisarStatusPill", status);
    setText("nisarOrbitType", orbit);
    setText("nisarStatusText", status);
    setText("nisarAltitude", altitude);
    setText("nisarLaunchDate", launchDate);
    setText("nisarMass", mass);
    setText("nisarVehicle", sat.launchVehicle || "");
    setText("nisarMissionLife", missionLife);
    setText("nisarPurpose", sat.purpose || "");

    const detailsLink = document.getElementById("nisarDetailsLink");
    if (detailsLink && sat.wikiUrl) {
      detailsLink.href = sat.wikiUrl;
    }
  }

  /* ── step dots ──────────────────────────────────────────── */
  function buildStepDots() {
    const dotsWrap = document.getElementById("orbitStepDots");
    if (!dotsWrap) return;
    STEPS.forEach((step, i) => {
      const dot = document.createElement("div");
      dot.className = "orbit-dot";
      dot.dataset.step = step;
      dot.title = step.charAt(0).toUpperCase() + step.slice(1);
      dotsWrap.appendChild(dot);
    });
  }

  /* ── set active step ────────────────────────────────────── */
  function setStep(index) {
    if (index === currentStep || !viewer) return;
    currentStep = index;
    const stepName = STEPS[index] || "intro";

    // cards
    document.querySelectorAll(".orbit-step-card").forEach(card => {
      card.classList.toggle("active", card.dataset.step === stepName);
    });

    const nisarCard = document.getElementById("nisarFixedCard");
    if (nisarCard) {
      nisarCard.style.display = stepName === "nisar" ? "block" : "none";
    }

    // dots
    document.querySelectorAll(".orbit-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    // camera
    const cam = CAMERA[stepName];
    if (cam) {
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(cam.lon, cam.lat, cam.alt),
        orientation: {
          heading: Cesium.Math.toRadians(cam.heading || 0),
          pitch: Cesium.Math.toRadians(cam.pitch || -90),
          roll: 0
        },
        duration: cam.duration || 2
      });
    }

    // highlight relevant orbits
    highlightOrbit(stepName);

    // explore mode
    const closeBtn = document.getElementById("orbitCloseBtn");
    enableInteraction(false);
    if (closeBtn) closeBtn.hidden = true;
  }

  /* ── highlight orbits by step ──────────────────────────── */
  function highlightOrbit(stepName) {
    if (!viewer) return;

    const targetCat = {
      "leo": "LEO",
      "sso": "SSO",
      "geo": "GEO",
      "cluster": null,
      "nisar": "SSO"
    }[stepName];

    viewer.entities.values.forEach(e => {
      const info = [...entityMap.values()].find(v => v.entity === e);

      if (info) {
        const cat = info.cat;
        const color = ORBIT_COLORS[cat] || ORBIT_COLORS.LEO;
        const isActive = info.sat.status === "active";

        if (stepName === "intro" || stepName === "cluster") {
          // show all normally
          e.show = true;
          e.point.pixelSize = isActive ? 7 : 4;
          e.point.color = cesiumColor(color, isActive ? 0.95 : 0.35);
        } else if (stepName === "nisar") {
          // highlight NISAR specifically
          const satName = String(info.sat.name || "").toUpperCase();
          const isNisar = satName.includes("NISAR");
          e.show = true;
          e.point.pixelSize = isNisar ? 14 : (cat === "SSO" ? 6 : 3);
          e.point.color = cesiumColor(color, isNisar ? 1 : (cat === "SSO" ? 0.5 : 0.06));
          e.point.outlineWidth = isNisar ? 3 : 1;
          e.point.outlineColor = isNisar ? Cesium.Color.WHITE : Cesium.Color.WHITE.withAlpha(0.15);
        } else if (targetCat) {
          const match = cat === targetCat;
          e.show = true;
          e.point.pixelSize = match ? (isActive ? 9 : 5) : 2;
          e.point.color = cesiumColor(color, match ? 0.95 : 0.04);
          e.point.outlineColor = match ? Cesium.Color.WHITE.withAlpha(0.4) : Cesium.Color.TRANSPARENT;
        }
      }

      // orbit lines
      if (e.polyline && e.name) {
        const orbitColor = e.name.includes("geo_ring") ? ORBIT_COLORS.GEO :
                           e.name.includes("_orbit") ? getOrbitLineColor(e.name) : null;
        if (orbitColor) {
          if (stepName === "intro" || stepName === "cluster") {
            e.polyline.material = cesiumColor(orbitColor, 0.2);
            e.show = true;
          } else if (targetCat) {
            const lineCat = getOrbitLineCat(e.name);
            const match = lineCat === targetCat || (targetCat === "GEO" && e.name === "geo_ring");
            e.polyline.material = cesiumColor(orbitColor, match ? 0.5 : 0.02);
            e.show = true;
          } else {
            e.polyline.material = cesiumColor(orbitColor, 0.15);
          }
        }
      }
    });
  }

  function getOrbitLineColor(name) {
    const satName = name.replace("_orbit", "");
    const info = entityMap.get(satName);
    return info ? (ORBIT_COLORS[info.cat] || ORBIT_COLORS.LEO) : ORBIT_COLORS.LEO;
  }

  function getOrbitLineCat(name) {
    const satName = name.replace("_orbit", "");
    const info = entityMap.get(satName);
    return info ? info.cat : "LEO";
  }

  /* ── interaction toggle ─────────────────────────────────── */
  function enableInteraction(on) {
    if (!viewer) return;
    const ctrl = viewer.scene.screenSpaceCameraController;
    ctrl.enableRotate = on;
    ctrl.enableZoom = on;
    ctrl.enableTranslate = on;
    ctrl.enableTilt = on;
    ctrl.enableLook = on;
  }

  /* ── public update (called from app.js scroll handler) ─── */
  window.updateOrbitGuide = function (progress) {
    if (!isInitialized) return;

    // orbit guide visible from 0.24 to 0.78 of explorer scroll
    const guideStart = 0.22;
    const guideEnd = 0.82;

    isVisible = progress >= guideStart && progress < guideEnd;

    const container = document.getElementById("orbitGuided");
    if (!container) return;

    const fadeIn = Math.min(1, (progress - guideStart) / 0.08);
    const fadeOut = Math.min(1, (guideEnd - progress) / 0.08);
    const opacity = Math.max(0, Math.min(fadeIn, fadeOut));

    if (isVisible) {
      container.classList.add("active");
      container.style.opacity = String(opacity);
      container.style.pointerEvents = opacity > 0.4 ? "auto" : "none";
    } else {
      container.classList.remove("active");
      container.style.opacity = "0";
      container.style.pointerEvents = "none";
    }

    // determine which step based on sub-progress within guide range
    if (isVisible) {
      const subProgress = (progress - guideStart) / (guideEnd - guideStart);
      let stepIndex = 0;
      if (subProgress >= 0.12) stepIndex = 1;
      if (subProgress >= 0.28) stepIndex = 2;
      if (subProgress >= 0.44) stepIndex = 3;
      if (subProgress >= 0.58) stepIndex = 4;
      if (subProgress >= 0.72) stepIndex = 5;
      setStep(stepIndex);
    }
  };

  /* ── close button ───────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("orbitCloseBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        // Scroll past the explorer section
        const explorer = document.getElementById("explorer");
        if (explorer) {
          const target = explorer.offsetTop + explorer.offsetHeight - window.innerHeight * 0.5;
          window.scrollTo({ top: target, behavior: "smooth" });
        }
      });
    }
  });

  /* ── auto-init when DOM ready ───────────────────────────── */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initOrbitGuide);
  } else {
    initOrbitGuide();
  }
})();
