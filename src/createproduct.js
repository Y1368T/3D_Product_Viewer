import * as THREE from 'three';

export function createProduct(scene) {
  const parts = [];

  const topGeometry = new THREE.BoxGeometry(2, 0.2, 1);
  const topMaterial = new THREE.MeshStandardMaterial({ color: 0x8e8e8e });
  const tableTop = new THREE.Mesh(topGeometry, topMaterial);
  tableTop.position.y = 1;
  scene.add(tableTop);
  parts.push(tableTop);

  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
  const legGeometry = new THREE.CylinderGeometry(0.07, 0.07, 1, 32);
  const legPositions = [
    [-0.85, 0.5, -0.4],
    [0.85, 0.5, -0.4],
    [-0.85, 0.5, 0.4],
    [0.85, 0.5, 0.4],
  ];

  legPositions.forEach(pos => {
    const leg = new THREE.Mesh(legGeometry, legMaterial.clone());
    leg.position.set(...pos);
    scene.add(leg);
    parts.push(leg);
  });

  return parts;
}
