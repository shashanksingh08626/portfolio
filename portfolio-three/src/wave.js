import * as THREE from "three";

// Wave Engine V1

const container = document.getElementById("wave-container");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  0.1,
  100
);

camera.position.set(0, 2.2, 8);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry(18, 5, 180, 60);

const material = new THREE.MeshBasicMaterial({
  color: 0xa855f7,
  wireframe: true,
  transparent: true,
  opacity: 0.45,
});

const wave = new THREE.Mesh(geometry, material);
wave.rotation.x = -0.95;
wave.position.y = -1.0;
scene.add(wave);

const pos = geometry.attributes.position;
const clock = new THREE.Clock();

function updateWave(t) {
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);

    const z =
      Math.sin(x * 0.8 + t * 1.6) * 0.35 +
      Math.cos((x + y) * 0.4 + t) * 0.18 +
      Math.sin(y * 1.2 + t * 1.3) * 0.12;

    pos.setZ(i, z);
  }

  pos.needsUpdate = true;
  wave.rotation.z = Math.sin(t * 0.15) * 0.02;
}

function animate() {
  requestAnimationFrame(animate);
  updateWave(clock.getElapsedTime());
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  const w = container.clientWidth;
  const h = container.clientHeight;

  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});
