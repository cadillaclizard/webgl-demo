import * as THREE from "three";
import Object3D from "./Object3D";

export default class Cube3D extends Object3D {
  material = new THREE.MeshLambertMaterial();

  constructor(scene: THREE.Scene) {
    super(scene);
    this.copy(new THREE.BoxBufferGeometry(50, 50, 50))
    var mesh = new THREE.Mesh(this, this.material);
    mesh.onAfterRender = () => mesh.rotateY(0.01);
    this.scene.add(mesh);    
  }
}
