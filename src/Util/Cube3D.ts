import * as THREE from "three";
import { BufferGeometry } from "three";
import Renderer from "../Renderer";

export default class Cube3D extends BufferGeometry {
  material = new THREE.MeshLambertMaterial();
  mesh = new THREE.Mesh();

  constructor() {
    super();
    this.copy(new THREE.BoxBufferGeometry(50, 50, 50));
    this.mesh.geometry = this;
    this.mesh.material = this.material;
    Renderer.Scene.add(this.mesh);
    this.setAt0Y()
    this.mesh.onAfterRender = () => this.mesh.rotateY(0.01);
  }

  private setAt0Y() {
    this.mesh.geometry.computeBoundingBox();
    var boundingBox = this.mesh.geometry.boundingBox;
    this.mesh.translateY(-boundingBox.min.y);
  }
}
