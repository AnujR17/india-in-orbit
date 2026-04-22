const everydayStates = [
  {
    title: "Understanding Earth In Real Time",
    desc: "INSAT meteorology, Oceansat, Cartosat, Resourcesat, RISAT, and SCATSAT missions monitor atmosphere, land, ocean, and disaster patterns.",
    purpose: "Purpose: Monitor weather, agriculture, oceans, disasters, and natural resources using optical and radar imaging.",
    impact: [
      "Accurate monsoon and cyclone forecasts",
      "Fishing zone advisories for fishermen",
      "Crop yield predictions and drought monitoring",
      "Flood mapping during heavy rains"
    ]
  },
  {
    title: "Keeping the World Connected",
    desc: "INSAT, GSAT, and CMS series satellites support telecom, broadcasting, emergency links, and digital access for remote regions.",
    purpose: "Purpose: Enable TV and radio broadcasting, telecommunication, internet, telemedicine, tele-education, and emergency communication.",
    impact: [
      "DTH television",
      "Rural healthcare via satellite-linked clinics",
      "Online classes in remote schools",
      "ATM and mobile network connectivity in off-grid areas"
    ]
  },
  {
    title: "Guiding Every Journey",
    desc: "IRNSS and NavIC satellites provide positioning, navigation, and timing services across India and nearby regions.",
    purpose: "Purpose: Provide positioning, navigation, and timing services over India and surrounding regions.",
    impact: [
      "Real-time train tracking for Indian Railways",
      "Vehicle location tracking in transport apps",
      "Fishermen distress alerts through NavIC devices",
      "Smartphone navigation support with L1 band in second-generation satellites"
    ]
  }
];

initLiveBackground();
initGlobalReachInteractivity();
bootstrapThree();

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

async function bootstrapThree() {
  try {
    const THREE = await import("three");
    const { GLTFLoader } = await import("https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/loaders/GLTFLoader.js");
    const updateLaunchSequence = initExplorerLaunchSequence(THREE, GLTFLoader);
    initExplorerOverlayReveal(updateLaunchSequence);
    const controller = initThreeScene(THREE, GLTFLoader);
    initEverydaySection(controller);
    initMilestonesParallax();
  } catch (error) {
    console.error("Three.js bootstrap failed", error);
    showRuntimeNotice("Three.js failed to load. Background remains active.");
    initExplorerOverlayReveal(() => {});
    initEverydaySection({ setTopic: () => {} });
    initMilestonesParallax();
  }
}

function initLiveBackground() {
  const canvas = document.getElementById("liveBackground");
  const ctx = canvas.getContext("2d");

  const stars = [];
  const shooting = [];
  let mouseX = -500;
  let mouseY = -500;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.length = 0;

    const count = Math.floor((canvas.width * canvas.height) / 7600);
    for (let i = 0; i < count; i += 1) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.25,
        twinkleSpeed: Math.random() * 0.006 + 0.0013,
        phase: Math.random() * Math.PI * 2,
        alphaBase: Math.random() * 0.2 + 0.27
      });
    }
  }

  function spawnShootingStar() {
    const fromLeft = Math.random() > 0.5;
    const startX = fromLeft ? -70 : canvas.width + 70;
    const startY = Math.random() * canvas.height * 0.6;
    const angle = fromLeft ? Math.random() * 0.45 + 0.18 : Math.PI - (Math.random() * 0.45 + 0.18);
    const speed = Math.random() * 8 + 6;

    shooting.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0,
      ttl: Math.random() * 62 + 55
    });
  }

  function drawStar(star, t) {
    const twinkle = Math.sin(t * star.twinkleSpeed + star.phase) * 0.07;
    const dx = mouseX - star.x;
    const dy = mouseY - star.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hoverBoost = dist < 120 ? (120 - dist) / 350 : 0;
    const alpha = Math.min(0.92, star.alphaBase + twinkle + hoverBoost);

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(226,232,240,${alpha})`;
    ctx.fill();
  }

  function drawShootingStar(s) {
    const tailX = s.x - s.vx * 4.5;
    const tailY = s.y - s.vy * 4.5;
    const trail = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
    trail.addColorStop(0, "rgba(46,185,223,0.95)");
    trail.addColorStop(0.55, "rgba(158,0,255,0.5)");
    trail.addColorStop(1, "rgba(158,0,255,0)");

    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(tailX, tailY);
    ctx.strokeStyle = trail;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(s.x, s.y, 1.9, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(226,232,240,0.94)";
    ctx.fill();
  }

  function animate(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
      drawStar(star, t);
    }

    if (Math.random() < 0.0062 && shooting.length < 2) {
      spawnShootingStar();
    }

    for (let i = shooting.length - 1; i >= 0; i -= 1) {
      const s = shooting[i];
      s.x += s.vx;
      s.y += s.vy;
      s.life += 1;
      drawShootingStar(s);

      if (s.life > s.ttl || s.x < -200 || s.x > canvas.width + 200 || s.y > canvas.height + 200) {
        shooting.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
  window.addEventListener("mouseout", () => {
    mouseX = -500;
    mouseY = -500;
  });

  resize();
  requestAnimationFrame(animate);
}

function initThreeScene(THREE, GLTFLoader) {
  const host = document.getElementById("spaceScene");
  const heroContent = document.querySelector(".hero-content");

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(44, window.innerWidth / window.innerHeight, 0.1, 120);
  camera.position.set(0, 0.4, 6.2);

  scene.add(new THREE.AmbientLight(0xffffff, 1.15));

  const root = new THREE.Group();
  root.rotation.z = THREE.MathUtils.degToRad(23.44);
  scene.add(root);

  const orbitGroup = new THREE.Group();
  root.add(orbitGroup);

  const satelliteAnchor = new THREE.Group();
  orbitGroup.add(satelliteAnchor);

  const satelliteOrbitPath = new THREE.Mesh(
    new THREE.RingGeometry(2.28, 2.30, 128),
    new THREE.MeshBasicMaterial({ color: 0x67e8f9, transparent: true, opacity: 0.28, side: THREE.DoubleSide })
  );
  satelliteOrbitPath.rotation.x = Math.PI / 2;
  orbitGroup.add(satelliteOrbitPath);

  const satKeyLight = new THREE.PointLight(0xffffff, 1.55, 8.5, 2);
  const satRimLight = new THREE.PointLight(0x7dd3fc, 1.2, 9.5, 2);
  orbitGroup.add(satKeyLight, satRimLight);

  let sat = createSatellite(THREE);
  satelliteAnchor.add(sat);

  const satLoader = new GLTFLoader();
  satLoader.load(
    "./assets/simple_satellite_low_poly_free.glb",
    gltf => {
      const model = gltf.scene;
      autoFitModel(THREE, model, 0.72);

      model.traverse(obj => {
        if (!obj.isMesh) return;

        const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
        const tuned = materials.map(mat => {
          if (!mat) return mat;

          if (mat.map) {
            mat.map.colorSpace = THREE.SRGBColorSpace;
          }

          if (mat.isMeshStandardMaterial || mat.isMeshPhysicalMaterial) {
            mat.roughness = Math.min(0.5, typeof mat.roughness === "number" ? mat.roughness : 0.5);
            mat.metalness = Math.max(0.3, typeof mat.metalness === "number" ? mat.metalness : 0.3);
            mat.envMapIntensity = 1.6;
            mat.emissive = mat.emissive || new THREE.Color(0x121826);
            mat.emissiveIntensity = 0.22;
            return mat;
          }

          return new THREE.MeshStandardMaterial({
            color: mat.color || new THREE.Color(0xffffff),
            map: mat.map || null,
            roughness: 0.45,
            metalness: 0.34,
            emissive: new THREE.Color(0x101726),
            emissiveIntensity: 0.2
          });
        });

        obj.material = Array.isArray(obj.material) ? tuned : tuned[0];
      });

      model.position.set(0, 0, 0);
      satelliteAnchor.clear();
      sat = model;
      satelliteAnchor.add(sat);
    },
    undefined,
    () => {
      // Keep fallback primitive satellite if GLB fails to load.
    }
  );

  const observationGroup = new THREE.Group();
  const communicationGroup = new THREE.Group();
  const navigationGroup = new THREE.Group();
  
  // Align overlays with the Earth texture's native offset (-78 deg) so coordinates match exactly!
  const baseOffset = THREE.MathUtils.degToRad(-78);
  observationGroup.rotation.y = baseOffset;
  communicationGroup.rotation.y = baseOffset;
  navigationGroup.rotation.y = baseOffset;

  root.add(observationGroup, communicationGroup, navigationGroup);
  const indiaAnchor = latLonToVector3(THREE, 22.8, 79.2, 1.17);
  const indiaBeacon = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 20, 20),
    new THREE.MeshBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.95 })
  );
  indiaBeacon.position.copy(indiaAnchor);
  observationGroup.add(indiaBeacon);

  const scanBeamLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]),
    new THREE.LineBasicMaterial({ color: 0x8ecbff, transparent: true, opacity: 0.62 })
  );
  root.add(scanBeamLine);

  const scanBeamCone = new THREE.Mesh(
    new THREE.ConeGeometry(0.16, 1, 28, 1, true),
    new THREE.MeshBasicMaterial({ color: 0x8ecbff, transparent: true, opacity: 0.26, side: THREE.DoubleSide })
  );
  root.add(scanBeamCone);

  const scanPulseSprites = [];

  const communicationNodeCount = 168;

  function createHubTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 32; canvas.height = 32;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(16, 16, 12, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }
  
  const hubTex = createHubTexture();
  const hubMat = new THREE.SpriteMaterial({ map: hubTex, color: 0x38bdf8, transparent: true, blending: THREE.AdditiveBlending, opacity: 0.95 });

  const comSprites = [];
  const indiaHubNode = indiaAnchor.clone().normalize().multiplyScalar(1.152);
  const communicationNodes = [];
  const communicationBands = [];

  const latStep = 14;
  for (let lat = -70, row = 0; lat <= 70; lat += latStep, row += 1) {
    const latRad = THREE.MathUtils.degToRad(lat);
    const count = Math.max(10, Math.round((communicationNodeCount / 12) * Math.max(0.4, Math.cos(latRad))));
    const lonStep = 360 / count;
    const offset = row % 2 === 0 ? 0 : lonStep / 2;
    const band = [];

    for (let i = 0; i < count; i += 1) {
      const lon = -180 + offset + i * lonStep;
      const node = latLonToVector3(THREE, lat, lon, 1.152);
      communicationNodes.push(node);
      band.push(communicationNodes.length - 1);
    }

    communicationBands.push(band);
  }

  communicationNodes.push(indiaHubNode);

  communicationNodes.forEach((pos) => {
    const sprite = new THREE.Sprite(hubMat);
    sprite.scale.set(0.03, 0.03, 0.03);
    sprite.position.copy(pos);
    communicationGroup.add(sprite);
    comSprites.push(sprite);
  });

  const globalNetArcs = new THREE.Group();
  communicationGroup.add(globalNetArcs);

  const arcMaterial = new THREE.LineBasicMaterial({
     color: 0x38bdf8,
     transparent: true,
     opacity: 0.45,
     blending: THREE.AdditiveBlending
  });

  const comPackets = [];
  const pairs = new Set();

  function addLink(aIndex, bIndex, opacity = 0.24, packetChance = 0.08) {
    const key = aIndex < bIndex ? `${aIndex}-${bIndex}` : `${bIndex}-${aIndex}`;
    if (pairs.has(key)) return;
    pairs.add(key);

    const a = communicationNodes[aIndex];
    const b = communicationNodes[bIndex];
    const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(1.28);
    const curve = new THREE.QuadraticBezierCurve3(a.clone(), mid, b.clone());
    const points = curve.getPoints(11);
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geom, arcMaterial.clone());
    line.material.opacity = opacity;
    globalNetArcs.add(line);

    if (Math.random() < packetChance) {
      const packet = new THREE.Sprite(hubMat);
      packet.scale.set(0.01, 0.01, 0.01);
      communicationGroup.add(packet);
      comPackets.push({ sprite: packet, curve, speed: 0.14 + Math.random() * 0.08, t: Math.random(), dir: Math.random() > 0.5 ? 1 : -1 });
    }
  }

  communicationBands.forEach((band, bandIdx) => {
    const nextBand = communicationBands[bandIdx + 1];
    const len = band.length;

    for (let i = 0; i < len; i += 1) {
      const a = band[i];
      const b = band[(i + 1) % len];
      addLink(a, b, 0.2, 0.06);

      if (nextBand) {
        const mapped = Math.floor((i / len) * nextBand.length) % nextBand.length;
        const c = nextBand[mapped];
        const d = nextBand[(mapped - 1 + nextBand.length) % nextBand.length];
        addLink(a, c, 0.22, 0.08);
        addLink(a, d, 0.22, 0.08);
      }
    }
  });

  const indiaLinkCount = Math.min(24, communicationNodes.length - 1);
  for (let i = 0; i < indiaLinkCount; i += 1) {
    const node = communicationNodes[i];
    const mid = indiaHubNode.clone().add(node).multiplyScalar(0.5).normalize().multiplyScalar(1.62);
    const curve = new THREE.QuadraticBezierCurve3(indiaHubNode.clone(), mid, node.clone());
    const points = curve.getPoints(24);
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geom, arcMaterial.clone());
    line.material.opacity = 0.36;
    globalNetArcs.add(line);
  }

  for (let i = 0; i < 8; i += 1) {
    const pulse = new THREE.Sprite(hubMat.clone());
    pulse.material.opacity = 0.8;
    pulse.scale.set(0.012, 0.012, 0.012);
    observationGroup.add(pulse);
    scanPulseSprites.push({ sprite: pulse, phase: (i / 8) * Math.PI * 2 });
  }
  const navSatellites = [];
  const navBeams = [];
  const navSatCount = 7;

  function createMiniNavSatellite(color) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, 0.08),
      new THREE.MeshBasicMaterial({ color })
    );
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.05), new THREE.MeshBasicMaterial({ color: 0x111827 }));
    const p2 = p1.clone();
    p1.position.x = -0.08;
    p2.position.x = 0.08;
    g.add(body, p1, p2);
    return g;
  }

  for (let i = 0; i < navSatCount; i += 1) {
    const satColor = [0x7dd3fc, 0xfde68a, 0x8ecbff, 0xfde68a, 0x7dd3fc, 0xfde68a, 0x8ecbff][i] || 0x7dd3fc;
    const satNode = createMiniNavSatellite(satColor);
    navSatellites.push(satNode);
    navigationGroup.add(satNode);

    const beam = new THREE.Mesh(
      new THREE.ConeGeometry(0.1, 1, 24, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xfef3c7, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false })
    );
    navigationGroup.add(beam);
    navBeams.push(beam);
  }

  const indiaMarker = new THREE.Mesh(
    new THREE.SphereGeometry(0.042, 20, 20),
    new THREE.MeshBasicMaterial({ color: 0x67e8f9 })
  );
  indiaMarker.position.copy(indiaAnchor);
  navigationGroup.add(indiaMarker);

  const earthState = { earth: null };
  loadEarthModel(THREE, GLTFLoader, root, earthState);

  let currentTopic = 0;
  let topicSpin = true;

  function setTopic(topic) {
    currentTopic = topic;
    observationGroup.visible = topic === 0;
    communicationGroup.visible = topic === 1;
    navigationGroup.visible = topic === 2;
    scanBeamLine.visible = topic === 0;

    if (topic === 2) {
      navigationGroup.rotation.y = 0;
    }

    topicSpin = topic === 1;

    if (earthState.earth && earthState.earth.material) {
      earthState.earth.material.color = new THREE.Color(topic === 2 ? 0xf2f4f8 : 0xffffff);
    }
  }
  setTopic(0);

  const clock = new THREE.Clock();

  function updateScenePlacement() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    const heroT = clamp(scrollY / vh, 0, 1);
    const heroPos = new THREE.Vector3(3.18, -1.9, -0.45);
    const everydayPos = new THREE.Vector3(1.62, -0.04, 0.05);
    const heroScale = 1.78;
    const everydayScale = 1.25;

    root.position.lerpVectors(heroPos, everydayPos, heroT);
    let scale = THREE.MathUtils.lerp(heroScale, everydayScale, heroT);

    if (heroContent) {
      const contentY = -heroT * 80;
      const contentOpacity = 1 - heroT * 1.5;
      heroContent.style.transform = `translateY(${contentY}px)`;
      heroContent.style.opacity = String(Math.max(0, contentOpacity));
    }

    const explorerStart = document.getElementById("explorer").offsetTop - vh * 0.35;
    const everydaySection = document.getElementById("everyday");
    const everydayFlowEnd = everydaySection
      ? everydaySection.offsetTop + everydaySection.offsetHeight - vh * 0.92
      : explorerStart - vh * 0.2;
    const flowStart = Math.min(explorerStart - vh * 0.24, everydayFlowEnd);
    const flowEnd = explorerStart + vh * 0.34;
    const flowT = clamp((scrollY - flowStart) / Math.max(1, flowEnd - flowStart), 0, 1);
    const easedFlow = flowT * flowT * (3 - 2 * flowT);
    const exitPos = new THREE.Vector3(3.34, 1.58, -0.22);

    if (flowT > 0) {
      root.position.lerp(exitPos, easedFlow);
      scale = THREE.MathUtils.lerp(scale, 1.55, easedFlow);
    }

    const exitFadeT = clamp((easedFlow - 0.44) / 0.56, 0, 1);
    host.style.opacity = String(1 - exitFadeT);
    root.visible = exitFadeT < 0.995;

    root.scale.setScalar(scale);
  }

  function animate() {
    const elapsed = clock.getElapsedTime();
    const heroTState = Math.max(0, Math.min(1, window.scrollY / window.innerHeight));
    const everydaySection = document.getElementById("everyday");
    const everydayStart = everydaySection.offsetTop - window.innerHeight * 0.2;
    const everydayEnd = everydaySection.offsetTop + everydaySection.offsetHeight - window.innerHeight * 0.1;
    const inEveryday = window.scrollY >= everydayStart && window.scrollY <= everydayEnd;

    const indiaTargetRotation = Math.atan2(-indiaAnchor.x, indiaAnchor.z);
    const shouldLockIndia = inEveryday && currentTopic === 0;

    observationGroup.visible = inEveryday && currentTopic === 0;
    communicationGroup.visible = inEveryday && currentTopic === 1;
    navigationGroup.visible = inEveryday && currentTopic === 2;
    scanBeamLine.visible = inEveryday && currentTopic === 0;
    orbitGroup.visible = !(inEveryday && currentTopic === 2);
    satelliteOrbitPath.visible = !inEveryday;

    if (topicSpin || (currentTopic === 0 && !shouldLockIndia)) {
      if (earthState.earth) earthState.earth.rotation.y += 0.00165;
      observationGroup.rotation.y += 0.00165;
      communicationGroup.rotation.y += 0.00165;
      if (currentTopic !== 2) {
        navigationGroup.rotation.y += 0.00165;
      }
    } else if (earthState.earth) {
      let currentY = earthState.earth.rotation.y;
      let diff = (indiaTargetRotation - currentY) % (Math.PI * 2);
      if (diff > Math.PI) diff -= Math.PI * 2;
      if (diff < -Math.PI) diff += Math.PI * 2;
      
      const frameLerp = currentY + diff * 0.04;
      
      earthState.earth.rotation.y = frameLerp;
      observationGroup.rotation.y = frameLerp;
      communicationGroup.rotation.y = frameLerp;
      if (currentTopic !== 2) {
        navigationGroup.rotation.y = frameLerp;
      }
    }

    if (currentTopic === 2) {
      navigationGroup.rotation.y = 0;
    }

    // Dynamic Satellite Orbit Sequence 
    const satRadius = THREE.MathUtils.lerp(5.8, 2.55, heroTState);
    const satYOffset = THREE.MathUtils.lerp(-0.4, 0.0, heroTState);
    const satAngle = -elapsed * 0.28;
    
    if (shouldLockIndia) {
      const indiaFront = indiaAnchor.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), observationGroup.rotation.y);
      const lockBase = indiaFront.clone().normalize().multiplyScalar(2.05);
      lockBase.z = Math.max(lockBase.z, 1.45);
      lockBase.y += 0.18 + Math.sin(elapsed * 1.5) * 0.04;
      satelliteAnchor.position.lerp(lockBase, 0.08);
      sat.lookAt(new THREE.Vector3(0, 0, 0));
      sat.rotation.z = THREE.MathUtils.degToRad(8);
    } else {
      satelliteAnchor.position.set(Math.cos(satAngle) * satRadius, satYOffset, Math.sin(satAngle) * satRadius);
      if (inEveryday && currentTopic === 1) {
        sat.lookAt(new THREE.Vector3(0, 0, 0));
        sat.rotation.z = THREE.MathUtils.degToRad(10);
      } else {
        sat.rotation.y = -satAngle;
        sat.rotation.z = THREE.MathUtils.degToRad(12);
      }
    }

    satKeyLight.position.set(satelliteAnchor.position.x + 0.48, satelliteAnchor.position.y + 0.22, satelliteAnchor.position.z + 0.42);
    satRimLight.position.set(satelliteAnchor.position.x - 0.52, satelliteAnchor.position.y - 0.14, satelliteAnchor.position.z - 0.38);

    orbitGroup.rotation.x = THREE.MathUtils.lerp(THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(16), heroTState);

    // Dynamic connectivity web pulsing spreading illusion
    if (communicationGroup.visible) {
       globalNetArcs.children.forEach((arc) => {
         arc.material.opacity = Math.max(0.12, arc.material.opacity + Math.sin(elapsed * 1.8) * 0.006);
       });
       comSprites.forEach((sprite) => {
         sprite.scale.setScalar(0.018 + Math.sin(elapsed * 2.2 + sprite.position.x * 8) * 0.0032);
         sprite.material.opacity = 0.58 + Math.sin(elapsed * 2 + sprite.position.y * 6) * 0.2;
       });
       
       comPackets.forEach(p => {
         p.t += p.speed * 0.01 * p.dir;
         if (p.t > 1) p.t = 0;
         if (p.t < 0) p.t = 1;
         p.sprite.position.copy(p.curve.getPointAt(p.t));
       });
    }

    if (observationGroup.visible) {
      const indiaRotated = indiaAnchor.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), observationGroup.rotation.y);
      const beamDir = indiaRotated.clone().sub(satelliteAnchor.position);
      const beamLen = beamDir.length();
      scanBeamLine.geometry.setFromPoints([satelliteAnchor.position.clone(), indiaRotated]);
      scanBeamLine.material.opacity = shouldLockIndia ? 0.86 : 0;
      scanBeamCone.position.copy(satelliteAnchor.position.clone().add(beamDir.clone().multiplyScalar(0.5)));
      scanBeamCone.scale.set(1, beamLen, 1);
      scanBeamCone.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), beamDir.clone().normalize());
      scanBeamCone.material.opacity = shouldLockIndia ? 0.26 : 0;

      indiaBeacon.scale.setScalar(1 + Math.sin(elapsed * 3.2) * 0.1);
      scanPulseSprites.forEach((entry, idx) => {
        const r = 0.035 + idx * 0.006;
        const a = elapsed * 2 + entry.phase;
        entry.sprite.position.set(
          indiaAnchor.x + Math.cos(a) * r,
          indiaAnchor.y + 0.006 + Math.sin(a * 1.3) * 0.004,
          indiaAnchor.z + Math.sin(a) * r
        );
        entry.sprite.material.opacity = 0.2 + (Math.sin(elapsed * 2.2 + idx) + 1) * 0.24;
      });
    } else {
      scanBeamLine.material.opacity = 0;
      scanBeamCone.material.opacity = 0;
    }

    if (navigationGroup.visible) {
      const indiaFront = indiaAnchor.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), earthState.earth ? earthState.earth.rotation.y : 0);
      const indiaSurface = indiaFront.clone();
      const navCenter = indiaFront.clone().normalize().multiplyScalar(2.1);
      navCenter.z = Math.max(navCenter.z, 1.8);
      navCenter.y += 0.16;

      const cameraForward = new THREE.Vector3().subVectors(new THREE.Vector3(0, 0, 0), camera.position).normalize();
      navCenter.add(cameraForward.multiplyScalar(-0.1));

      const fallbackUp = Math.abs(indiaFront.y) > 0.82 ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(0, 1, 0);
      const navRight = new THREE.Vector3().crossVectors(fallbackUp, indiaFront).normalize();
      if (navRight.lengthSq() < 0.0001) {
        navRight.set(1, 0, 0);
      }
      const navUp = new THREE.Vector3().crossVectors(indiaFront, navRight).normalize();
      const navOffsets = [
        new THREE.Vector3(-0.82, 0.42, 0),
        new THREE.Vector3(-0.5, 0.2, 0),
        new THREE.Vector3(-0.18, 0.04, 0),
        new THREE.Vector3(0, -0.08, 0),
        new THREE.Vector3(0.18, 0.04, 0),
        new THREE.Vector3(0.5, 0.2, 0),
        new THREE.Vector3(0.82, 0.42, 0)
      ];
      for (let i = 0; i < navSatellites.length; i += 1) {
        const offset = navOffsets[i] || new THREE.Vector3(0, 0.16, 0);
        const satPos = navCenter.clone()
          .add(navRight.clone().multiplyScalar(offset.x))
          .add(navUp.clone().multiplyScalar(offset.y))
          .add(indiaFront.clone().normalize().multiplyScalar(offset.z));
        satPos.add(indiaFront.clone().normalize().multiplyScalar(0.02 * Math.sin(elapsed * 0.4 + i * 0.6)));
        satPos.z = Math.max(satPos.z, 1.82);

        navSatellites[i].position.copy(satPos);
        navSatellites[i].lookAt(indiaSurface);

        const tgt = indiaSurface.clone();
        const dir = tgt.clone().sub(satPos);
        const len = dir.length();
        navBeams[i].position.copy(satPos.clone().add(dir.clone().multiplyScalar(0.5)));
        navBeams[i].scale.set(1, len, 1);
        navBeams[i].quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir.clone().normalize());
        navBeams[i].material.opacity = 0.14 + Math.sin(elapsed * 1.2 + i) * 0.025;
      }

      indiaMarker.scale.setScalar(1.28 + Math.sin(elapsed * 2.2) * 0.08);
      indiaMarker.position.copy(indiaSurface);
    }

    updateScenePlacement();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  animate();
  return { setTopic };
}

async function loadEarthModel(THREE, GLTFLoader, root, earthState) {
  const loader = new GLTFLoader();
  const earthBasePath = "./assets/earth/";

  const placeholderEarth = new THREE.Mesh(
    new THREE.SphereGeometry(1.15, 72, 72),
    new THREE.MeshBasicMaterial({ color: 0x9db4d6 })
  );
  placeholderEarth.rotation.y = THREE.MathUtils.degToRad(-78);
  earthState.earth = placeholderEarth;
  root.add(placeholderEarth);

  function replaceEarth(earth) {
    if (earthState.earth) {
      root.remove(earthState.earth);
    }
    earthState.earth = earth;
    root.add(earth);
  }

  try {
    const response = await fetch(`${earthBasePath}scene.gltf`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Earth GLTF HTTP ${response.status}`);
    }

    const gltfJson = await response.json();
    gltfJson.extensionsRequired = (gltfJson.extensionsRequired || []).filter(ext => ext !== "KHR_materials_pbrSpecularGlossiness");
    gltfJson.extensionsUsed = (gltfJson.extensionsUsed || []).filter(ext => ext !== "KHR_materials_pbrSpecularGlossiness");

    (gltfJson.materials || []).forEach(mat => {
      const ext = mat.extensions && mat.extensions.KHR_materials_pbrSpecularGlossiness;
      if (!ext) return;

      const diffuseTexture = ext.diffuseTexture || null;
      const diffuseFactor = ext.diffuseFactor || [1, 1, 1, 1];
      mat.pbrMetallicRoughness = {
        baseColorTexture: diffuseTexture || undefined,
        baseColorFactor: diffuseFactor,
        metallicFactor: 0,
        roughnessFactor: 1
      };

      delete mat.extensions.KHR_materials_pbrSpecularGlossiness;
      if (Object.keys(mat.extensions).length === 0) {
        delete mat.extensions;
      }
    });

    loader.parse(
      JSON.stringify(gltfJson),
      earthBasePath,
      gltf => {
        const earth = gltf.scene;
        autoFitModel(THREE, earth, 2.3);

        earth.traverse(obj => {
          if (!obj.isMesh) return;
          const map = obj.material && obj.material.map ? obj.material.map : null;
          if (map) {
            map.colorSpace = THREE.SRGBColorSpace;
            map.needsUpdate = true;
          }

          obj.material = new THREE.MeshBasicMaterial({
            map: map || null,
            color: 0xffffff,
            side: THREE.DoubleSide
          });
        });

        earth.rotation.y = THREE.MathUtils.degToRad(-78);
        replaceEarth(earth);
      },
      () => {
        showRuntimeNotice("Earth GLTF parse failed. Using texture fallback.");
        attachTexturedFallbackEarth(THREE, root, earthState, replaceEarth);
      }
    );
  } catch (error) {
    console.warn("Earth GLTF bootstrap failed", error);
    showRuntimeNotice("Earth GLTF failed. Using texture fallback.");
    attachTexturedFallbackEarth(THREE, root, earthState, replaceEarth);
  }
}

function attachTexturedFallbackEarth(THREE, root, earthState, replaceEarth) {
  const texLoader = new THREE.TextureLoader();
  const textures = [
    "./assets/earth/textures/Material.002_diffuse.jpeg"
  ];

  function attachSphere(texture) {
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1.15, 72, 72),
      new THREE.MeshBasicMaterial(
        texture
          ? { map: texture, color: 0xffffff, side: THREE.DoubleSide }
          : { color: 0xa9bbd4 }
      )
    );
    earth.rotation.y = THREE.MathUtils.degToRad(-78);

    if (typeof replaceEarth === "function") {
      replaceEarth(earth);
      return;
    }

    earthState.earth = earth;
    root.add(earth);
  }

  function tryTexture(index) {
    if (index >= textures.length) {
      attachSphere(null);
      return;
    }

    texLoader.load(
      textures[index],
      texture => {
        texture.colorSpace = THREE.SRGBColorSpace;
        attachSphere(texture);
      },
      undefined,
      () => tryTexture(index + 1)
    );
  }

  tryTexture(0);
}

function autoFitModel(THREE, model, targetSize) {
  const box = new THREE.Box3().setFromObject(model);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const uniformScale = targetSize / maxDim;

  model.scale.setScalar(uniformScale);
  model.position.x = -center.x * uniformScale;
  model.position.y = -center.y * uniformScale;
  model.position.z = -center.z * uniformScale;
}

function createSatellite(THREE) {
  const sat = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.16, 0.22),
    new THREE.MeshBasicMaterial({ color: 0xc7d6ee })
  );
  sat.add(body);

  const panelMat = new THREE.MeshBasicMaterial({ color: 0x2eb9df });
  const leftPanel = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.02, 0.14), panelMat);
  const rightPanel = leftPanel.clone();
  leftPanel.position.x = -0.26;
  rightPanel.position.x = 0.26;
  sat.add(leftPanel, rightPanel);

  return sat;
}

function latLonToVector3(THREE, lat, lon, radius) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function initEverydaySection(sceneController) {
  const section = document.getElementById("everyday");
  const title = document.getElementById("everydayTitle");
  const desc = document.getElementById("everydayDesc");
  const purpose = document.getElementById("everydayPurpose");
  const impact = document.getElementById("everydayImpact");

  let currentTopic = -1;

  function setTopic(topic) {
    const current = everydayStates[topic] || everydayStates[0];
    title.textContent = current.title;
    desc.textContent = current.desc;
    purpose.textContent = current.purpose;
    impact.innerHTML = current.impact.map(item => `<li>${item}</li>`).join("");
    section.classList.toggle("nav-mode", topic === 2);

    sceneController.setTopic(topic);
    currentTopic = topic;
  }

  function updateFromScroll() {
    const start = section.offsetTop;
    const end = start + section.offsetHeight - window.innerHeight;
    const p = clamp((window.scrollY - start) / Math.max(1, end - start), 0, 1);
    const nextTopic = Math.min(2, Math.floor(p * 3));
    if (nextTopic !== currentTopic) {
      setTopic(nextTopic);
    }
  }

  window.addEventListener("scroll", updateFromScroll, { passive: true });
  window.addEventListener("resize", updateFromScroll);
  updateFromScroll();
}


function initExplorerLaunchSequence(THREE, GLTFLoader) {
  const host = document.getElementById("explorerLaunchScene");
  const wrap = document.querySelector(".explorer-launch-wrap");
  const introSection = document.querySelector(".intro-section");
  if (!host || !wrap) return () => {};

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(host.clientWidth || window.innerWidth, host.clientHeight || window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, (host.clientWidth || window.innerWidth) / (host.clientHeight || window.innerHeight), 0.1, 500);
  camera.position.set(0, 5, 20);
  camera.lookAt(0, 5, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.3);
  keyLight.position.set(3, 8, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x8ecbff, 0.5);
  fillLight.position.set(-3, 2, 3);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xff7733, 0.5);
  rimLight.position.set(0, -2, -5);
  scene.add(rimLight);

  const rocketGroup = new THREE.Group();
  scene.add(rocketGroup);

  const loader = new GLTFLoader();
  let rocket = null;
  let rocketLoaded = false;

  loader.load(
    "./assets/launch-vehicle/scene.gltf",
    gltf => {
      rocket = gltf.scene;
      autoFitModel(THREE, rocket, 10.2);
      rocket.rotation.x = THREE.MathUtils.degToRad(-90);
      rocketGroup.add(rocket);
      rocketLoaded = true;
    },
    undefined,
    () => {
      const fallbackGeom = new THREE.CylinderGeometry(0.6, 0.7, 7.8, 24);
      const fallbackMat = new THREE.MeshStandardMaterial({ color: 0xe5e7eb, metalness: 0.3, roughness: 0.6 });
      rocket = new THREE.Mesh(fallbackGeom, fallbackMat);
      rocketGroup.add(rocket);
      rocketLoaded = true;
    }
  );

  let animationProgress = 0;
  const clock = new THREE.Clock();
  const smoothstep = (value, start, end) => {
    const t = clamp((value - start) / Math.max(0.0001, end - start), 0, 1);
    return t * t * (3 - 2 * t);
  };

  function resize() {
    const w = host.clientWidth || window.innerWidth;
    const h = host.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener("resize", resize);

  function animate() {
    requestAnimationFrame(animate);
    
    if (!rocketLoaded) {
      renderer.render(scene, camera);
      return;
    }

    clock.getDelta();
    const t = clamp(animationProgress, 0, 1);
    
    // Left-to-up ascent, then stronger tilt so the rocket exits decisively.
    const startX = -14.6;
    const startY = -15.2;
    const rocketX = startX + t * 7.4;
    const rocketY = startY + t * 39.5;
    const tiltAngle = THREE.MathUtils.lerp(-11, -31, smoothstep(t, 0.72, 1));
    
    rocketGroup.position.set(rocketX, rocketY, 0);
    
    rocketGroup.rotation.set(0, 0, THREE.MathUtils.degToRad(tiltAngle));
    
    // Bigger visual size while keeping perspective believable.
    const rocketScale = THREE.MathUtils.lerp(2.35, 1.45, t);
    rocketGroup.scale.setScalar(rocketScale);

    // Keep rocket on the left lane and let it travel up and slightly right.
    camera.position.x = -5.6;
    camera.position.y = THREE.MathUtils.lerp(5.4, 11.7, t);
    camera.lookAt(-5.0, Math.max(0, rocketY * 0.34), 0);

    renderer.render(scene, camera);
  }

  animate();

  function update(progress) {
    const launchStart = 0.07;
    const launchEnd = 0.23;
    
    const showWrap = progress >= 0.01 && progress < 0.25;
    wrap.style.opacity = showWrap ? "1" : "0";
    wrap.style.display = showWrap ? "block" : "none";
    
    // Title fades out with the rocket so both clear before the next phase.
    if (introSection) {
      const titleFade = progress < 0.1 ? 1 : Math.max(0, 1 - (progress - 0.1) / 0.13);
      introSection.style.opacity = String(titleFade);
    }
    
    if (progress >= launchStart && progress <= launchEnd) {
      animationProgress = clamp((progress - launchStart) / (launchEnd - launchStart), 0, 1);
    } else if (progress < launchStart) {
      animationProgress = 0;
    } else {
      animationProgress = 1;
    }
  }

  return update;
}

function initExplorerOrbitSequence(THREE, GLTFLoader) {
  const host = document.getElementById("explorerOrbitScene");
  const wrap = document.querySelector(".orbit-story");
  const orbitBtns = document.querySelectorAll(".orbit-btn");
  if (!host || !wrap) return () => {};

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(host.clientWidth || 800, host.clientHeight || 600);
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, (host.clientWidth || 800) / (host.clientHeight || 600), 0.1, 220);
  camera.position.set(5.8, 3.4, 10.9);
  camera.lookAt(0, 0, 0);

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const sun = new THREE.DirectionalLight(0xffffff, 1.4);
  sun.position.set(10, 5, 8);
  scene.add(sun);

  // Earth with texture
  const earthGroup = new THREE.Group();
  earthGroup.rotation.x = THREE.MathUtils.degToRad(23.5); // Earth's axial tilt
  scene.add(earthGroup);

  const earthGeom = new THREE.SphereGeometry(1.8, 64, 64);
  const earthMat = new THREE.MeshStandardMaterial({ 
    color: 0x4488cc,
    roughness: 0.8,
    metalness: 0.1
  });
  const earth = new THREE.Mesh(earthGeom, earthMat);
  earthGroup.add(earth);

  // Load Earth texture if available
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load("./assets/earth/textures/Material.002_diffuse.jpeg", tex => {
    tex.flipY = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    earth.material.map = tex;
    earth.material.color.setHex(0xffffff);
    earth.rotation.y = 0;
    earth.material.needsUpdate = true;
  }, undefined, () => {});

  // Poles (axis line)
  const poleGeom = new THREE.CylinderGeometry(0.02, 0.02, 5, 8);
  const poleMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });
  const poles = new THREE.Mesh(poleGeom, poleMat);
  earthGroup.add(poles);

  // Pole markers (N and S)
  const northMarker = new THREE.Mesh(
    new THREE.SphereGeometry(0.08, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0x00aaff })
  );
  northMarker.position.y = 2.5;
  earthGroup.add(northMarker);

  const southMarker = new THREE.Mesh(
    new THREE.SphereGeometry(0.08, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0xff6644 })
  );
  southMarker.position.y = -2.5;
  earthGroup.add(southMarker);

  // Orbit definitions with accurate ISRO mission data
  const orbitDefs = [
    { name: "leo", label: "LEO", fullName: "Low Earth Orbit (LEO)", desc: "160–2,000 km altitude. ISRO's Cartosat, RISAT, and Resourcesat series operate here for Earth observation with 90-120 min orbital periods.", color: 0xff3355, radius: 2.6, inclination: 0.48, node: 0.22, speed: 1.5 },
    { name: "sso", label: "SSO", fullName: "Sun-Synchronous Orbit (SSO)", desc: "600–800 km near-polar orbit. PSLV's primary mission profile. Satellites like Oceansat and EOS pass close to both poles for repeatable Earth imaging.", color: 0xfbbf24, radius: 3.35, inclination: 1.71, node: 0.5, speed: 1.2 },
    { name: "gto", label: "GTO", fullName: "Geosynchronous Transfer Orbit (GTO)", desc: "Elliptical transfer orbit with 170–36,000 km altitude. GSLV and LVM3 inject INSAT/GSAT spacecraft here before circularization to GEO.", color: 0x06b6d4, radius: 4.65, inclination: 0.28, node: -0.14, speed: 0.6 },
    { name: "geo", label: "GEO", fullName: "Geostationary Orbit (GEO)", desc: "35,786 km equatorial orbit. INSAT, GSAT, and weather satellites remain fixed over the same Earth region for continuous service.", color: 0x38bdf8, radius: 6.05, inclination: 0, node: 0, speed: 0.35 }
  ];

  const orbits = [];
  const satellites = [];

  orbitDefs.forEach((def, idx) => {
    const orbitGroup = new THREE.Group();
    orbitGroup.rotation.x = def.inclination;
    orbitGroup.rotation.y = def.node || 0;
    
    // Create orbit ring with depth (parts hidden behind Earth)
    const orbitPoints = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      orbitPoints.push(new THREE.Vector3(
        Math.cos(angle) * def.radius,
        0,
        Math.sin(angle) * def.radius
      ));
    }
    
    // Front half of orbit (visible)
    const frontGeom = new THREE.BufferGeometry();
    const frontPoints = [];
    for (let i = 0; i <= segments / 2; i++) {
      const angle = (i / segments) * Math.PI * 2;
      frontPoints.push(Math.cos(angle) * def.radius, 0, Math.sin(angle) * def.radius);
    }
    frontGeom.setAttribute('position', new THREE.Float32BufferAttribute(frontPoints, 3));
    const frontLine = new THREE.Line(
      frontGeom,
      new THREE.LineBasicMaterial({ color: def.color, transparent: true, opacity: 0.9, linewidth: 2 })
    );
    orbitGroup.add(frontLine);
    
    // Back half of orbit (behind Earth - solid but faded)
    const backGeom = new THREE.BufferGeometry();
    const backPoints = [];
    for (let i = segments / 2; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      backPoints.push(Math.cos(angle) * def.radius, 0, Math.sin(angle) * def.radius);
    }
    backGeom.setAttribute('position', new THREE.Float32BufferAttribute(backPoints, 3));
    const backLine = new THREE.Line(
      backGeom,
      new THREE.LineBasicMaterial({ 
        color: def.color, 
        transparent: true, 
        opacity: 0.26
      })
    );
    orbitGroup.add(backLine);

    // Satellite
    const satGeom = new THREE.SphereGeometry(0.1, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({ color: def.color });
    const satellite = new THREE.Mesh(satGeom, satMat);
    
    // Glow effect
    const glowGeom = new THREE.SphereGeometry(0.18, 16, 16);
    const glowMat = new THREE.MeshBasicMaterial({ 
      color: def.color, 
      transparent: true, 
      opacity: 0.35 
    });
    const glow = new THREE.Mesh(glowGeom, glowMat);
    satellite.add(glow);
    
    orbitGroup.add(satellite);
    scene.add(orbitGroup);
    
    orbits.push({
      group: orbitGroup,
      frontLine: frontLine,
      backLine: backLine,
      def: def,
      angle: Math.random() * Math.PI * 2
    });
    
    satellites.push({
      mesh: satellite,
      glow: glow,
      orbit: orbits[idx]
    });
  });

  // Info display
  const orbitInfoEl = document.getElementById("orbitInfo");
  const orbitInfoLabel = orbitInfoEl ? orbitInfoEl.querySelector(".orbit-info-label") : null;
  
  let activeOrbit = null;
  
  function setActiveOrbit(orbitName) {
    activeOrbit = orbitName;
    
    orbitBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.orbit === orbitName);
    });
    
    const activeDef = orbitDefs.find(d => d.name === orbitName);
    if (orbitInfoLabel) {
      if (activeDef) {
        orbitInfoLabel.innerHTML = `<strong>${activeDef.fullName}</strong><br><span style="opacity:0.8;font-size:0.9em">${activeDef.desc}</span>`;
        orbitInfoLabel.classList.add("active");
      } else {
        orbitInfoLabel.innerHTML = "Choose an orbit below to view its path and mission role.";
        orbitInfoLabel.classList.remove("active");
      }
    }
    
    orbits.forEach(orbit => {
      const isActive = orbit.def.name === orbitName;
      orbit.frontLine.material.opacity = isActive ? 1 : (orbitName ? 0.08 : 0.7);
      orbit.backLine.material.opacity = isActive ? 0.42 : (orbitName ? 0.02 : 0.2);
    });
    
    satellites.forEach((sat, idx) => {
      const isActive = orbits[idx].def.name === orbitName;
      sat.mesh.scale.setScalar(isActive ? 1.5 : 0.9);
      sat.glow.material.opacity = isActive ? 0.72 : 0.22;
    });
  }

  orbitBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const orbitName = btn.dataset.orbit;
      if (activeOrbit === orbitName) {
        setActiveOrbit(null);
      } else {
        setActiveOrbit(orbitName);
      }
    });
  });

  const clock = new THREE.Clock();
  let isVisible = false;

  function resize() {
    const w = host.clientWidth || 800;
    const h = host.clientHeight || 600;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener("resize", resize);

  function animate() {
    requestAnimationFrame(animate);
    
    if (!isVisible) {
      renderer.render(scene, camera);
      return;
    }
    
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();
    
    // Rotate Earth slowly in a natural eastward direction.
    earth.rotation.y -= delta * 0.15;
    
    // Animate satellites along their orbits (continuous)
    orbits.forEach((orbit, idx) => {
      orbit.angle += delta * orbit.def.speed;
      
      const x = Math.cos(orbit.angle) * orbit.def.radius;
      const z = Math.sin(orbit.angle) * orbit.def.radius;
      
      satellites[idx].mesh.position.set(x, 0, z);
      
      // Check if satellite is behind Earth (for depth effect)
      const worldPos = new THREE.Vector3();
      satellites[idx].mesh.getWorldPosition(worldPos);
      const isBehind = worldPos.z < 0 && Math.sqrt(worldPos.x * worldPos.x + worldPos.y * worldPos.y) < 1.8;
      satellites[idx].mesh.visible = !isBehind;
    });
    
    // Gentle camera movement
    camera.position.x = 5.8 + Math.sin(elapsed * 0.08) * 0.35;
    camera.position.y = 3.4 + Math.sin(elapsed * 0.1) * 0.22;
    camera.lookAt(0, 0, 0);
    
    renderer.render(scene, camera);
  }

  animate();

  function update(progress) {
    const orbitStart = 0.28;
    const orbitEnd = 0.78;
    
    isVisible = progress >= orbitStart && progress < orbitEnd;
    
    const show = clamp((progress - orbitStart) / 0.14, 0, 1);
    const hide = clamp((progress - (orbitEnd - 0.12)) / 0.12, 0, 1);
    const opacity = show * (1 - hide);
    
    wrap.style.opacity = String(opacity);
    wrap.classList.toggle("active", isVisible);
  }

  return update;
}


function initExplorerOverlayReveal(updateLaunchSequence) {
  const section = document.getElementById("explorer");
  const iframe = document.getElementById("satelliteExperience");
  const explorerStage = section ? section.querySelector(".explorer-stage") : null;
  const previewPanel = document.getElementById("simPreviewPanel");
  const enterBtn = document.getElementById("enterSim");
  const exitBtn = document.getElementById("exitSim");
  const simOverlay = document.getElementById("simOverlay");
  const orbitStory = section ? section.querySelector('.orbit-guided') : null;
  const vehicleStory = section ? section.querySelector('.vehicle-story') : null;
  const nisarCard = section ? section.querySelector('#nisarFixedCard') : null;

  window._simActive = false;

  const setStagePriority = on => {
    if (!section || !explorerStage) return;
    section.classList.toggle("sim-priority", on);
    explorerStage.style.zIndex = on ? "16" : "5";
  };

  // ───── Fullscreen Simulation Overlay ─────
  function openSimulation() {
    window._simActive = true;
    if (simOverlay) {
      simOverlay.style.display = "block";
      // Load the satellite client iframe on first open
      const simIframe = document.getElementById("simIframe");
      if (simIframe && !simIframe.dataset.loaded) {
        simIframe.dataset.loaded = "1";
        simIframe.src = "../../satellite/client/index.html";
      }
    }
    // Lock page scroll
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function closeSimulation() {
    window._simActive = false;
    if (simOverlay) {
      simOverlay.style.display = "none";
    }
    // Restore page scroll
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  if (enterBtn) enterBtn.addEventListener("click", openSimulation);
  if (exitBtn) exitBtn.addEventListener("click", closeSimulation);

  // Allow Escape key to exit simulation
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && window._simActive) {
      closeSimulation();
    }
  });

  // ───── Scroll-driven Reveal (unchanged logic) ─────
  const smooth = value => {
    const v = clamp(value, 0, 1);
    return v * v * (3 - 2 * v);
  };

  const range = (value, startRange, endRange) => {
    return clamp((value - startRange) / Math.max(0.0001, endRange - startRange), 0, 1);
  };

  function updateReveal() {
    if (window._simActive) return;

    const start = section.offsetTop;
    const end = start + section.offsetHeight - window.innerHeight;
    const progress = clamp((window.scrollY - start) / Math.max(1, end - start), 0, 1);

    const phaseWindow = (value, inStart, inEnd, outStart, outEnd) => {
      const inVis = smooth(range(value, inStart, inEnd));
      const outVis = 1 - smooth(range(value, outStart, outEnd));
      return clamp(inVis * outVis, 0, 1);
    };

    const introVis = 1 - smooth(range(progress, 0.14, 0.22));
    const orbitVis = phaseWindow(progress, 0.18, 0.24, 0.74, 0.82);
    const simVis = phaseWindow(progress, 0.78, 0.86, 0.9, 0.96);
    const vehicleVis = phaseWindow(progress, 0.9, 0.95, 0.995, 0.999);

    updateLaunchSequence(progress);
    if (window.updateOrbitGuide) window.updateOrbitGuide(progress);
    
    const intro = section.querySelector('.intro-section');
    if (intro) {
      intro.style.display = introVis > 0.08 ? "block" : "none";
      intro.style.opacity = String(introVis);
      intro.style.transform = `translate(-50%, calc(-50% + ${(1 - introVis) * 10}px))`;
    }

    if (orbitStory) {
      orbitStory.style.display = orbitVis > 0.08 ? "block" : "none";
      orbitStory.style.opacity = String(orbitVis);
      orbitStory.style.transform = `translateY(${(1 - orbitVis) * 12}px)`;
      orbitStory.style.pointerEvents = orbitVis > 0.45 ? "auto" : "none";
    }

    if (vehicleStory) {
      const vehicleOn = vehicleVis > 0.08;
      vehicleStory.style.display = vehicleOn ? "block" : "none";
      vehicleStory.style.opacity = String(vehicleVis);
      vehicleStory.style.transform = `translateY(${(1 - vehicleVis) * 12}px)`;
      vehicleStory.style.pointerEvents = vehicleVis > 0.45 ? "auto" : "none";
      
      const vehicleItems = [...vehicleStory.querySelectorAll('.vehicle-item')];
      const vehicleProgress = vehicleVis;
      
      vehicleItems.forEach((item, index) => {
        const delay = index * 0.08;
        const localProgress = clamp((vehicleProgress - delay) / (1 - delay), 0, 1);
        const eased = 1 - Math.pow(1 - localProgress, 3);
        const itemOn = vehicleOn && localProgress > 0.08;
        item.classList.toggle('active', itemOn);
        
        if (vehicleOn) {
          item.style.opacity = String(eased);
          const baseX = (index - 1) * 18;
          const baseY = 32 + index * 8;
          item.style.transform = `translate3d(${(1 - eased) * baseX}px, calc(${(1 - eased) * baseY}px + var(--vehicle-hover-lift, 0px)), 0)`;
        } else {
          item.style.opacity = "0";
          item.style.transform = "translate3d(0, calc(24px + var(--vehicle-hover-lift, 0px)), 0)";
        }
      });
    }

    // Show the iframe preview and the "Open Simulation" panel together
    if (iframe) {
      iframe.style.opacity = String(simVis);
    }
    setStagePriority(simVis > 0.12);

    // Show/hide the preview panel with the Open Simulation button
    if (previewPanel) {
      if (simVis > 0.12) {
        previewPanel.classList.add("visible");
        previewPanel.style.opacity = String(simVis);
      } else {
        previewPanel.classList.remove("visible");
        previewPanel.style.opacity = "0";
      }
    }
  }

  window.addEventListener("scroll", updateReveal, { passive: true });
  window.addEventListener("resize", updateReveal);
  updateReveal();
}


function initMilestonesParallax() {
  const section = document.getElementById("milestones");
  const scrollArea = document.getElementById("milestonesScroll");
  const cards = [...document.querySelectorAll("#milestonesCanvas .milestone-item")];
  if (!section || !scrollArea || !cards.length) return;

  cards.forEach((card, index) => {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Focus milestone ${index + 1}`);
    card.addEventListener("click", () => {
      if (window.innerWidth <= 960) return;
      const start = section.offsetTop;
      const end = start + scrollArea.offsetHeight - window.innerHeight;
      const span = Math.max(1, cards.length - 1);
      const p = index / span;
      const y = start + p * Math.max(1, end - start);
      window.scrollTo({ top: y, behavior: "smooth" });
    });
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });

  function update() {
    if (window.innerWidth <= 960) return;

    const start = section.offsetTop;
    const end = start + scrollArea.offsetHeight - window.innerHeight;
    const p = clamp((window.scrollY - start) / Math.max(1, end - start), 0, 1);

    const span = Math.max(1, cards.length - 1);
    const activeStep = Math.round(p * span);
    cards.forEach((card, idx) => {
      const distance = idx - activeStep;
      const isActive = distance === 0;
      const side = distance < 0 ? -1 : 1;
      const x = isActive ? 0 : side * (320 + Math.abs(distance) * 60);
      const y = isActive ? 0 : 25 + Math.abs(distance) * 35;
      const scale = isActive ? 1.02 : 0.85;
      const opacity = isActive ? 1 : 0.25;
      card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`;
      card.style.opacity = String(opacity);
      card.style.zIndex = String(isActive ? 30 : 10 - Math.min(8, Math.abs(distance)));
      card.classList.toggle('active', isActive);
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function initGlobalReachInteractivity() {
  const poster = document.querySelector(".infographic-poster");
  const centerFrame = document.getElementById("posterCenterFrame");
  if (!poster) return;

  const cards = [...poster.querySelectorAll(".continent-card[data-continent]")];
  const bandZones = [...poster.querySelectorAll(".rocket-band-zone[data-continent]")];
  const legendItems = [...poster.querySelectorAll(".rocket-legend-item[data-continent-target]")];
  if (!cards.length || !bandZones.length) return;

  const cardByContinent = new Map(cards.map(card => [card.dataset.continent, card]));
  let activeContinent = "";

  cards.forEach(card => {
    const flags = [...card.querySelectorAll(".country-flag[data-count]")];
    if (!flags.length) return;

    const counts = flags
      .map(flag => Number.parseInt(flag.dataset.count || "0", 10))
      .filter(value => Number.isFinite(value) && value >= 0);

    if (!counts.length) return;

    flags.forEach(flag => {
      const count = Math.max(1, Number.parseInt(flag.dataset.count || "0", 10));
      flag.setAttribute("data-count", String(count));
      flag.setAttribute("aria-label", `${flag.dataset.country || "Country"}: ${count} satellites`);
    });
  });

  function setActive(continent) {
    const normalized = continent || "";
    activeContinent = normalized;

    cards.forEach(card => {
      card.classList.toggle("is-active", card.dataset.continent === normalized);
    });

    bandZones.forEach(zone => {
      zone.classList.toggle("is-selected", zone.dataset.continent === normalized);
    });

    legendItems.forEach(item => {
      item.classList.toggle("is-active", item.dataset.continentTarget === normalized);
    });

    poster.dataset.focus = normalized || "all";
    poster.classList.toggle("has-active-card", normalized.length > 0);
  }

  bandZones.forEach(zone => {
    const activate = () => {
      const key = zone.dataset.continent || "";
      if (!cardByContinent.has(key)) return;
      setActive(activeContinent === key ? "" : key);
    };

    zone.addEventListener("click", activate);
    zone.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });

  legendItems.forEach(item => {
    item.addEventListener("click", () => {
      const key = item.dataset.continentTarget || "";
      if (!cardByContinent.has(key)) return;
      setActive(activeContinent === key ? "" : key);
    });
  });

  document.addEventListener("click", event => {
    if (!activeContinent) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.closest(".rocket-band-zone") || target.closest(".continent-card") || target.closest(".rocket-legend-item")) return;
    if (!poster.contains(target)) {
      setActive("");
      return;
    }
    setActive("");
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && activeContinent) {
      setActive("");
    }
  });

  if (centerFrame) {
    const resetProximity = () => {
      centerFrame.style.setProperty("--prox-x", "0px");
      centerFrame.style.setProperty("--prox-y", "0px");
      centerFrame.classList.remove("proximity-active");
    };

    poster.addEventListener("mousemove", event => {
      const rect = centerFrame.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist <= 260) {
        const factor = (260 - dist) / 260;
        const shiftX = Math.max(-6, Math.min(6, (dx / 42) * factor));
        const shiftY = Math.max(-6, Math.min(6, (dy / 42) * factor));
        centerFrame.style.setProperty("--prox-x", `${shiftX.toFixed(2)}px`);
        centerFrame.style.setProperty("--prox-y", `${shiftY.toFixed(2)}px`);
        centerFrame.classList.add("proximity-active");
      } else {
        resetProximity();
      }
    });

    poster.addEventListener("mouseleave", resetProximity);
  }

  const visibilityObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        poster.classList.toggle("legend-visible", entry.isIntersecting && entry.intersectionRatio > 0.35);
      });
    },
    {
      threshold: [0.35, 0.55]
    }
  );
  visibilityObserver.observe(poster);

  setActive("");
}

function showRuntimeNotice(message) {
  if (document.getElementById("runtimeNotice")) return;
  const note = document.createElement("div");
  note.id = "runtimeNotice";
  note.textContent = message;
  note.style.position = "fixed";
  note.style.right = "14px";
  note.style.bottom = "14px";
  note.style.zIndex = "30";
  note.style.padding = "8px 12px";
  note.style.borderRadius = "999px";
  note.style.fontSize = "12px";
  note.style.fontFamily = "Inter, sans-serif";
  note.style.background = "rgba(11,15,26,0.82)";
  note.style.border = "1px solid rgba(255,255,255,0.22)";
  note.style.color = "#e2e8f0";
  document.body.appendChild(note);
}
