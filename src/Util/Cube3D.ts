import * as THREE from "three";
import { BufferGeometry } from "three";

export default class Cube3D extends BufferGeometry {
  material = new THREE.MeshLambertMaterial();
  mesh = new THREE.Mesh();
  scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    super();
    this.scene = scene;
    this.copy(new THREE.BoxBufferGeometry(50, 50, 50));
    this.mesh.geometry = this;
    this.mesh.material = this.material;
    scene.add(this.mesh);
    this.setAt0Y()
    this.mesh.onAfterRender = () => this.mesh.rotateY(0.01);
  }

  private setAt0Y() {
    this.mesh.geometry.computeBoundingBox();
    var boundingBox = this.mesh.geometry.boundingBox;
    this.mesh.translateY(-boundingBox.min.y);
  }
}
