let angle = 0;
let paused = false;

export function animateCamera(camera, controls) {
  // Disable auto when user manually rotates
  controls.addEventListener('start', () => {
    paused = true;
  });

  controls.addEventListener('end', () => {
    // Optional: resume after some delay
    setTimeout(() => paused = false, 3000); // resume after 3s
  });

  // Animate horizontal Y-axis only
  function updateCamera() {
    requestAnimationFrame(updateCamera);

    if (!paused) {
      angle += 0.003;
      const radius = 5;

      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      camera.position.x = x;
      camera.position.z = z;
      camera.lookAt(0, 1, 0);
    }

    controls.update();
  }

  updateCamera();
}
