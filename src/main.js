import { initScene } from './initScene.js';
import { createProduct } from './createproduct.js';
import { addLighting } from './addLighting.js';
import { setupInteraction } from './interaction.js';
import { animateCamera } from './cameraAnimation.js';

const { scene, camera, renderer, controls } = initScene();
const productParts = createProduct(scene);
addLighting(scene);
setupInteraction(productParts, camera, renderer, scene);
animateCamera(camera, controls);

// ✅ ADD THIS: render loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
