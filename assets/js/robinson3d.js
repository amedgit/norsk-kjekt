/* Escenas 3D de Robinson Crusoe: York (1651) y el Atlántico (1657).
   Se carga solo en la ruta #/robinson con import() dinámico. Three.js vive en
   assets/vendor y se cachea en el service worker tras la primera visita.
   Si WebGL no está disponible, quien llama muestra el fallback HTML. */

import * as THREE from '../vendor/three.module.min.js';

const SPOT_ANCHORS = {
  house: [-4.8, 4.0, -4.6],
  ship: [3.6, 1.7, 1.8],
  mast: [3.9, 5.3, 1.8],
  sea: [-5.5, 0.35, 5.5],
  storm: [0.5, 6.4, -9]
};

/* Pequeños ajustes en píxeles para que las etiquetas no se pisen. */
const SPOT_OFFSETS = {
  house: [-14, -10],
  ship: [0, 16],
  mast: [16, -10],
  sea: [16, 0],
  storm: [0, -8]
};

const SEA_ANCHORS = {
  boat: [0, 1.3, 0],
  oars: [1.9, 0.7, 0.2],
  sea: [-6, 0.35, 6.5],
  moon: [-9, 8.5, -17],
  coast: [-7, 2.2, -15]
};

const SEA_OFFSETS = {
  boat: [-4, 18],
  oars: [26, 12],
  sea: [12, 0],
  moon: [0, 0],
  coast: [0, -8]
};

const SCENES = {
  york: {
    anchors: SPOT_ANCHORS,
    offsets: SPOT_OFFSETS,
    background: 0x93c9df,
    fog: [28, 58],
    camera: [10.5, 6.1, 14.2],
    lookAt: [0, 2.4, 0],
    build: buildHarbour
  },
  sea: {
    anchors: SEA_ANCHORS,
    offsets: SEA_OFFSETS,
    background: 0x0a1a26,
    fog: [30, 72],
    camera: [8.4, 5.2, 13.2],
    lookAt: [0, 1.7, -2.2],
    build: buildSea
  }
};

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial(Object.assign({
    color,
    roughness: 0.85,
    metalness: 0.02,
    flatShading: true
  }, opts));
}

function box(w, h, d, color, opts) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color, opts));
}

function addBox(group, w, h, d, color, x, y, z, opts) {
  const m = box(w, h, d, color, opts);
  m.position.set(x, y, z);
  group.add(m);
  return m;
}

function buildHarbour(world) {
  const seaGeo = new THREE.PlaneGeometry(70, 70, 32, 32);
  seaGeo.rotateX(-Math.PI / 2);
  const sea = new THREE.Mesh(seaGeo, mat(0x2a7591, { roughness: 0.5, metalness: 0.12 }));
  sea.position.y = 0;
  world.add(sea);
  const seaBase = Float32Array.from(seaGeo.attributes.position.array);

  const land = addBox(world, 19, 1.2, 12, 0x527a4b, 0, 0.1, -6.4);
  land.receiveShadow = false;

  addBox(world, 15.5, 0.8, 2.2, 0x8b8a80, 0, 0.45, -1.5);
  addBox(world, 15.5, 0.16, 2.5, 0x9e9c90, 0, 0.9, -1.5);

  // Muelle de madera
  const dock = new THREE.Group();
  for (let i = 0; i < 9; i++) {
    addBox(dock, 2.3, 0.14, 0.36, 0x7a5432, 0, 0.98, 0.2 + i * 0.42);
  }
  [-1.05, 1.05].forEach((x) => {
    [0.1, 1.75, 3.4].forEach((z) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 1.6, 6), mat(0x5e3f24));
      post.position.set(x, 0.35, z);
      dock.add(post);
    });
  });
  world.add(dock);

  // Casa principal
  const house = new THREE.Group();
  addBox(house, 3.3, 2.3, 2.7, 0xd9c9a8, 0, 1.85, 0);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.55, 1.55, 4), mat(0xa94f39));
  roof.position.set(0, 3.75, 0);
  roof.rotation.y = Math.PI / 4;
  house.add(roof);
  addBox(house, 0.55, 1.05, 0.12, 0x4c3322, 0, 1.28, 1.38);
  addBox(house, 0.62, 0.62, 0.1, 0x6f9fb5, -0.95, 2.05, 1.39);
  addBox(house, 0.62, 0.62, 0.1, 0x6f9fb5, 0.95, 2.05, 1.39);
  addBox(house, 0.4, 1.0, 0.4, 0x8c7a63, 1.05, 3.95, -0.55);
  house.position.set(-4.8, 0.7, -4.6);
  world.add(house);

  // Segunda casa
  const house2 = new THREE.Group();
  addBox(house2, 2.4, 1.8, 2.2, 0xcbbd9e, 0, 1.6, 0);
  const roof2 = new THREE.Mesh(new THREE.ConeGeometry(1.95, 1.25, 4), mat(0x8f4a38));
  roof2.position.set(0, 3.05, 0);
  roof2.rotation.y = Math.PI / 4;
  house2.add(roof2);
  addBox(house2, 0.45, 0.9, 0.1, 0x4c3322, 0, 1.2, 1.11);
  house2.position.set(4.6, 0.7, -5.4);
  world.add(house2);

  // Barco
  const ship = new THREE.Group();
  const hull = addBox(ship, 3.7, 1.3, 1.8, 0x6b3f22, 0, 0.75, 0);
  hull.rotation.z = 0.015;
  const bow = new THREE.Mesh(new THREE.ConeGeometry(0.92, 1.7, 4), mat(0x6b3f22));
  bow.rotation.z = -Math.PI / 2;
  bow.rotation.y = Math.PI / 4;
  bow.position.set(2.55, 0.78, 0);
  ship.add(bow);
  addBox(ship, 4.2, 0.16, 1.95, 0x8a5a33, 0, 1.45, 0);
  addBox(ship, 0.8, 0.85, 1.6, 0x5d351c, -1.95, 1.55, 0);
  addBox(ship, 1.0, 0.12, 1.7, 0x8a5a33, -1.95, 2.02, 0);
  addBox(ship, 1.0, 0.12, 1.7, 0x8a5a33, 2.55, 1.12, 0);

  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.1, 4.8, 6), mat(0x4a2f1b));
  mast.position.set(0.35, 3.8, 0);
  ship.add(mast);

  const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.9, 6), mat(0x4a2f1b));
  yard.rotation.z = Math.PI / 2;
  yard.position.set(0.35, 4.55, 0);
  ship.add(yard);

  const sailGeo = new THREE.PlaneGeometry(2.45, 2.5, 8, 8);
  const sailPos = sailGeo.attributes.position;
  for (let i = 0; i < sailPos.count; i++) {
    const sx = sailPos.getX(i) / 2.45 + 0.5;
    sailPos.setZ(i, Math.sin(sx * Math.PI) * 0.2);
  }
  sailGeo.computeVertexNormals();
  const sail = new THREE.Mesh(
    sailGeo,
    new THREE.MeshStandardMaterial({ color: 0xf2ead8, roughness: 0.9, side: THREE.DoubleSide })
  );
  sail.position.set(0.35, 3.15, 0.02);
  ship.add(sail);

  const foremast = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.075, 3.4, 6), mat(0x4a2f1b));
  foremast.position.set(-1.55, 3.1, 0);
  ship.add(foremast);
  const foreyard = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.7, 6), mat(0x4a2f1b));
  foreyard.rotation.z = Math.PI / 2;
  foreyard.position.set(-1.55, 3.7, 0);
  ship.add(foreyard);
  const foresail = new THREE.Mesh(
    new THREE.PlaneGeometry(1.45, 1.5, 6, 6),
    new THREE.MeshStandardMaterial({ color: 0xe9e0cc, roughness: 0.9, side: THREE.DoubleSide })
  );
  foresail.position.set(-1.55, 2.9, 0.02);
  ship.add(foresail);

  const flag = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75, 0.4),
    new THREE.MeshStandardMaterial({ color: 0xb3202f, roughness: 0.9, side: THREE.DoubleSide })
  );
  flag.position.set(0.75, 6.12, 0);
  ship.add(flag);

  const bowsprit = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 2.3, 6), mat(0x4a2f1b));
  bowsprit.rotation.z = -Math.PI / 2.6;
  bowsprit.position.set(2.35, 1.65, 0);
  ship.add(bowsprit);

  function rope(ax, ay, az, bx, by, bz) {
    const a = new THREE.Vector3(ax, ay, az);
    const b = new THREE.Vector3(bx, by, bz);
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const len = a.distanceTo(b);
    const r = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, len, 4), mat(0x33241a));
    r.position.copy(mid);
    r.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
    ship.add(r);
  }
  rope(0.35, 6.15, 0, 2.7, 1.4, 0);
  rope(0.35, 6.15, 0, -2.55, 1.6, 0);
  rope(0.35, 6.15, 0, 0.35, 1.5, 0.85);
  rope(0.35, 6.15, 0, 0.35, 1.5, -0.85);

  ship.position.set(3.6, 0, 1.8);
  ship.rotation.y = -0.35;
  ship.scale.setScalar(0.92);
  world.add(ship);

  // Bote pequeño junto al muelle
  const boat = new THREE.Group();
  addBox(boat, 1.5, 0.35, 0.65, 0x7a4a2a, 0, 0.18, 0);
  addBox(boat, 1.2, 0.12, 0.5, 0xb07a48, 0, 0.4, 0);
  boat.position.set(1.7, 0, 1.4);
  boat.rotation.y = 0.4;
  world.add(boat);

  // Nubes de tormenta al fondo
  const clouds = new THREE.Group();
  const cloudMat = mat(0x46596a, { roughness: 1, metalness: 0 });
  [[-7.0, 6.0, -10, 1.7], [-3.2, 6.5, -11, 2.1], [0.8, 6.1, -10.5, 1.9], [4.6, 6.6, -11, 1.8], [7.8, 6.0, -9.5, 1.5]].forEach((c) => {
    const cloud = new THREE.Mesh(new THREE.IcosahedronGeometry(c[3], 0), cloudMat);
    cloud.position.set(c[0], c[1], c[2]);
    cloud.scale.set(1.4, 0.6, 1);
    clouds.add(cloud);
  });
  world.add(clouds);

  return { sea, seaBase, ship, boat, clouds };
}


function buildSea(world) {
  const seaGeo = new THREE.PlaneGeometry(80, 80, 38, 38);
  seaGeo.rotateX(-Math.PI / 2);
  const sea = new THREE.Mesh(seaGeo, mat(0x123c4a, { roughness: 0.45, metalness: 0.22 }));
  world.add(sea);
  const seaBase = Float32Array.from(seaGeo.attributes.position.array);

  // Reflejo de luna sobre el agua
  const reflection = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 36),
    new THREE.MeshBasicMaterial({ color: 0xd9e2df, transparent: true, opacity: 0.07, depthWrite: false })
  );
  reflection.rotation.x = -Math.PI / 2;
  reflection.position.set(-9, 0.03, -2);
  world.add(reflection);

  // Costa africana al fondo
  addBox(world, 48, 1.5, 7, 0x2a4034, -5, 0.2, -16.5);
  addBox(world, 34, 0.8, 5, 0x35503d, -8, 0.6, -17.5);
  const hillMat = mat(0x1c3028);
  [[-18, 3.2, -20, 4.6], [-9.5, 2.4, -19, 3.4], [1.5, 2.8, -20, 3.8], [9, 1.9, -19, 2.8]].forEach((h) => {
    const hill = new THREE.Mesh(new THREE.ConeGeometry(h[3], h[3] * 1.35, 5), hillMat);
    hill.position.set(h[0], h[1], h[2]);
    world.add(hill);
  });
  // Palmeras lejanas en silueta
  [-12, -6, 3].forEach((x, i) => {
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 2.4 + i * 0.3, 5), mat(0x2b2118));
    trunk.position.set(x, 2.2, -15.6);
    world.add(trunk);
    const top = new THREE.Mesh(new THREE.ConeGeometry(0.9, 0.7, 6), mat(0x24402f));
    top.position.set(x, 3.5 + i * 0.15, -15.6);
    world.add(top);
  });

  // Estrellas
  const starPos = [];
  for (let i = 0; i < 190; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = 12 + Math.random() * 26;
    starPos.push(Math.cos(a) * r, 5 + Math.random() * 18, -12 - Math.random() * 20);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
    color: 0xf2ead8,
    size: 0.16,
    transparent: true,
    opacity: 0.8,
    depthWrite: false
  }));
  world.add(stars);

  // Luna
  const moon = new THREE.Mesh(new THREE.SphereGeometry(1.55, 20, 16), new THREE.MeshBasicMaterial({ color: 0xf2ead8 }));
  moon.position.set(-9, 8.5, -17);
  world.add(moon);
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(2.7, 20, 16),
    new THREE.MeshBasicMaterial({ color: 0xf2ead8, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  glow.position.copy(moon.position);
  world.add(glow);

  // Bote de la fuga
  const boat = new THREE.Group();
  addBox(boat, 3.1, 0.72, 1.15, 0x6b3f22, 0, 0.55, 0);
  const bow = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.25, 4), mat(0x6b3f22));
  bow.rotation.z = -Math.PI / 2;
  bow.rotation.y = Math.PI / 4;
  bow.position.set(1.95, 0.58, 0);
  boat.add(bow);
  addBox(boat, 3.25, 0.12, 1.25, 0x8a5a33, 0, 0.98, 0);
  addBox(boat, 0.7, 0.18, 1.2, 0x5d351c, -1.5, 1.05, 0);

  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.055, 2.6, 6), mat(0x4a2f1b));
  mast.position.set(0.15, 2.3, 0);
  boat.add(mast);
  const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.8, 5), mat(0x4a2f1b));
  yard.rotation.z = Math.PI / 2;
  yard.position.set(0.15, 2.85, 0);
  boat.add(yard);
  const sail = new THREE.Mesh(
    new THREE.PlaneGeometry(1.75, 1.55),
    new THREE.MeshStandardMaterial({ color: 0xf2ead8, roughness: 0.95, side: THREE.DoubleSide })
  );
  sail.position.set(0.15, 2.15, 0.02);
  boat.add(sail);

  // Dos figuras: Robinson y Xury
  function sailor(x, shirt, skin, hair, scale) {
    const g = new THREE.Group();
    const body = addBox(g, 0.44 * scale, 0.78 * scale, 0.3 * scale, shirt, 0, 0.38 * scale, 0);
    body.rotation.y = 0.15;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.17 * scale, 10, 8), mat(skin));
    head.position.set(0, 0.92 * scale, 0);
    g.add(head);
    const hairMesh = new THREE.Mesh(new THREE.SphereGeometry(0.175 * scale, 10, 8), mat(hair));
    hairMesh.position.set(0, 0.98 * scale, -0.01);
    hairMesh.scale.set(1, 0.55, 1);
    g.add(hairMesh);
    g.position.set(x, 1.0, 0);
    boat.add(g);
    return g;
  }
  const robinson = sailor(-0.55, 0x1f4e79, 0xf2c9a8, 0x7a4d2d, 1);
  const xury = sailor(0.52, 0xe0a43a, 0x6f4634, 0x2b211c, 0.82);

  // Remos
  [-1, 1].forEach((side) => {
    const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 2.5, 5), mat(0x5a3a20));
    oar.rotation.z = Math.PI / 2;
    oar.rotation.y = side * 0.18;
    oar.position.set(side * 1.75, 0.72, 0.28);
    boat.add(oar);
    const blade = addBox(boat, 0.38, 0.04, 0.16, 0x8a5a33, side * 2.95, 0.72, 0.34);
    blade.rotation.y = side * 0.18;
  });

  // Farol
  const lamp = new THREE.PointLight(0xffb347, 1.5, 9);
  lamp.position.set(-1.15, 1.45, 0.5);
  boat.add(lamp);
  const flame = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffc36b }));
  flame.position.set(-1.15, 1.42, 0.5);
  boat.add(flame);

  world.add(boat);

  return { sea, seaBase, boat, moon, glow, stars, robinson, xury, reflection };
}

export function mount(stage, options) {
  const opts = options || {};
  const hotspots = Array.isArray(opts.hotspots) ? opts.hotspots : [];
  const reduce = !!opts.reduceMotion;
  const speak = typeof opts.speak === 'function' ? opts.speak : function () {};
  const taskText = typeof opts.taskText === 'function' ? opts.taskText : function () { return ''; };
  const doneText = opts.doneText || '';

  const cfg = SCENES[opts.sceneId] || SCENES.york;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(cfg.background);
  scene.fog = new THREE.Fog(cfg.background, cfg.fog[0], cfg.fog[1]);

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 120);
  camera.position.set(cfg.camera[0], cfg.camera[1], cfg.camera[2]);
  camera.lookAt(cfg.lookAt[0], cfg.lookAt[1], cfg.lookAt[2]);

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  if ('outputColorSpace' in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setSize(1, 1, false);

  const canvasWrap = document.createElement('div');
  canvasWrap.className = 'scene-canvas';
  canvasWrap.appendChild(renderer.domElement);
  stage.appendChild(canvasWrap);

  const overlay = document.createElement('div');
  overlay.className = 'scene-spots';
  stage.appendChild(overlay);

  const caption = document.createElement('div');
  caption.className = 'scene-caption';
  caption.setAttribute('aria-live', 'polite');
  const hint = document.createElement('span');
  hint.textContent = opts.hint || '';
  caption.appendChild(hint);
  stage.appendChild(caption);

  if (opts.sceneId === 'sea') {
    scene.add(new THREE.HemisphereLight(0x7fa6b2, 0x0a141a, 0.95));
    const moonLight = new THREE.DirectionalLight(0xbfd4e6, 1.35);
    moonLight.position.set(-10, 14, -8);
    scene.add(moonLight);
    scene.add(new THREE.AmbientLight(0x8fb0c0, 0.26));
  } else {
    scene.add(new THREE.HemisphereLight(0xd8ecff, 0x3d4a30, 1.5));
    const sun = new THREE.DirectionalLight(0xfff1cf, 2.1);
    sun.position.set(10, 16, 8);
    scene.add(sun);
    scene.add(new THREE.AmbientLight(0xffffff, 0.22));
  }

  const world = new THREE.Group();
  scene.add(world);
  const parts = cfg.build(world);

  const found = new Set();
  const buttons = [];

  function setCaption(h) {
    caption.innerHTML = '';
    caption.classList.remove('done');
    const b = document.createElement('b');
    b.dir = 'ltr';
    b.textContent = h.no;
    const es = document.createElement('span');
    es.className = 'es';
    es.textContent = h.es;
    const sayBtn = document.createElement('button');
    sayBtn.type = 'button';
    sayBtn.className = 'say';
    sayBtn.setAttribute('aria-label', h.no);
    sayBtn.textContent = '🔊';
    sayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speak(h.no);
    });
    caption.append(b, es, sayBtn);
  }

  function progress() {
    if (typeof opts.onProgress === 'function') opts.onProgress(found.size, hotspots.length);
  }

  hotspots.forEach((h) => {
    const anchor = cfg.anchors[h.spot] || [0, 2, 0];
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'scene-hotspot';
    el.setAttribute('aria-label', h.no + ' — ' + h.es);
    const label = document.createElement('b');
    label.dir = 'ltr';
    label.textContent = h.no;
    el.appendChild(label);
    el.addEventListener('pointerdown', (e) => e.stopPropagation());
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      speak(h.no);
      setCaption(h);
      if (!found.has(h.id)) {
        found.add(h.id);
        el.classList.add('found');
        if (found.size === hotspots.length && doneText) {
          caption.innerHTML = '';
          caption.classList.add('done');
          const done = document.createElement('span');
          done.textContent = doneText;
          caption.appendChild(done);
        }
      }
      progress();
    });
    overlay.appendChild(el);
    buttons.push({ el, anchor: new THREE.Vector3(anchor[0], anchor[1], anchor[2]), offset: cfg.offsets[h.spot] || [0, 0] });
  });

  progress();

  let yaw = 0;
  let targetYaw = 0;
  let dragging = false;
  let lastX = 0;

  function onDown(e) {
    if (e.target.closest && e.target.closest('.scene-hotspot')) return;
    dragging = true;
    lastX = e.clientX;
    if (stage.setPointerCapture) {
      try { stage.setPointerCapture(e.pointerId); } catch (err) { /* puntero sintético */ }
    }
  }
  function onMove(e) {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    lastX = e.clientX;
    targetYaw = Math.max(-0.85, Math.min(0.85, targetYaw + dx * 0.006));
  }
  function onUp() { dragging = false; }

  stage.addEventListener('pointerdown', onDown);
  stage.addEventListener('pointermove', onMove);
  stage.addEventListener('pointerup', onUp);
  stage.addEventListener('pointercancel', onUp);
  stage.addEventListener('pointerleave', onUp);

  function resize() {
    const w = Math.max(1, stage.clientWidth);
    const h = Math.max(1, stage.clientHeight);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  let ro = null;
  if (typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(resize);
    ro.observe(stage);
  } else {
    window.addEventListener('resize', resize);
  }

  const clock = new THREE.Clock();
  const v = new THREE.Vector3();
  let raf = 0;
  let destroyed = false;
  let inView = true;
  let io = null;
  if (typeof IntersectionObserver !== 'undefined') {
    io = new IntersectionObserver(function (entries) {
      inView = entries.some(function (e) { return e.isIntersecting; });
    }, { threshold: 0.02 });
    io.observe(stage);
  }

  function updateSpots() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    world.updateMatrixWorld();
    buttons.forEach((b) => {
      v.copy(b.anchor).applyMatrix4(world.matrixWorld).project(camera);
      const off = b.offset;
      const x = clamp((v.x * 0.5 + 0.5) * w + off[0], 42, w - 42);
      const y = clamp((-v.y * 0.5 + 0.5) * h + off[1], 18, h - 18);
      const visible = v.z < 1 && x > -40 && x < w + 40 && y > -30 && y < h + 30;
      b.el.style.opacity = visible ? '1' : '0';
      b.el.style.pointerEvents = visible ? 'auto' : 'none';
      b.el.style.transform = 'translate(-50%, -50%) translate(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px)';
    });
  }

  function tick() {
    if (destroyed) return;
    raf = requestAnimationFrame(tick);
    if (document.hidden || !stage.isConnected || !inView) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;

    if (parts.ship) {
      const goal = reduce ? 0 : Math.sin(time * 0.9) * 0.018;
      parts.ship.position.y = goal;
      parts.ship.rotation.x = reduce ? 0 : Math.cos(time * 0.7) * 0.012;
      parts.ship.rotation.z = reduce ? 0.0 : Math.sin(time * 0.55) * 0.015;
    }
    if (parts.boat) {
      parts.boat.position.y = reduce ? 0 : Math.sin(time * 1.1 + 1) * 0.04;
      parts.boat.rotation.z = reduce ? 0 : Math.sin(time * 0.6) * 0.012;
    }
    if (!reduce && parts.sea) {
      const pos = parts.sea.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = parts.seaBase[i * 3];
        const z = parts.seaBase[i * 3 + 2];
        pos.array[i * 3 + 1] = Math.sin(x * 0.38 + time * 0.9) * 0.075 + Math.cos(z * 0.45 + time * 1.15) * 0.055;
      }
      pos.needsUpdate = true;
    }
    if (!reduce && parts.clouds) parts.clouds.position.x = Math.sin(time * 0.08) * 0.6;

    yaw += (targetYaw - yaw) * 0.12;
    world.rotation.y = yaw;
    world.updateMatrixWorld();
    updateSpots();
    renderer.render(scene, camera);
  }
  tick();

  return function destroy() {
    if (destroyed) return;
    destroyed = true;
    cancelAnimationFrame(raf);
    if (ro) ro.disconnect();
    if (io) io.disconnect();
    window.removeEventListener('resize', resize);
    stage.removeEventListener('pointerdown', onDown);
    stage.removeEventListener('pointermove', onMove);
    stage.removeEventListener('pointerup', onUp);
    stage.removeEventListener('pointercancel', onUp);
    stage.removeEventListener('pointerleave', onUp);
    scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material.dispose();
      }
    });
    renderer.dispose();
    if (renderer.forceContextLoss) renderer.forceContextLoss();
    canvasWrap.remove();
    overlay.remove();
    caption.remove();
  };
}
