import * as THREE from 'three';

export function addLighting(scene) {
  // Set a dark background (can also be set in scene directly)
  scene.background = new THREE.Color(0x111111); // very dark gray

  // Dim ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // lower intensity
  scene.add(ambientLight);

  // Bright spot light to highlight product
  const spotLight = new THREE.SpotLight(0xffffff, 1);
  spotLight.position.set(2, 5, 3);
  spotLight.angle = Math.PI / 6;
  spotLight.penumbra = 0.3;
  spotLight.castShadow = true;
  scene.add(spotLight);

  // Optional helper to see light direction
  // const helper = new THREE.SpotLightHelper(spotLight);
  // scene.add(helper);
}
