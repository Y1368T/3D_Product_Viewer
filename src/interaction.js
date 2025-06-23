import * as THREE from 'three';

export function setupInteraction(meshes, camera, renderer, scene) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const infoPanel = document.getElementById('infoPanel');

  window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(meshes);

    if (intersects.length > 0) {
      const part = intersects[0].object;

      const originalColor = part.material.color.clone();
      part.material.color.set(0xff4d00);

      infoPanel.innerText = getPartName(part);

      setTimeout(() => {
        part.material.color.copy(originalColor);
      }, 400);
    }
  });

  function getPartName(mesh) {
    if (mesh.geometry.type === 'BoxGeometry') return 'Table Top';
    if (mesh.geometry.type === 'CylinderGeometry') return 'Table Leg';
    return 'Unknown Part';
  }
}
