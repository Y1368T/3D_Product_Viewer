import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function initScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111); // dark background

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(5, 2, 5);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Allow vertical and horizontal manual control
  controls.enableRotate = true;

  // Disable automatic rotation here (we’ll do it manually)
  controls.autoRotate = false;

  // Optional: limit how far up/down the user can look
  controls.minPolarAngle = 0.3; // up
  controls.maxPolarAngle = Math.PI / 1.8; // down

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scene, camera, renderer, controls };
}
