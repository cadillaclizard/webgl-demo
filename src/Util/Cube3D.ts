import * as THREE from "three";
import { BufferGeometry, Geometry } from "three";
import Renderer from "../Renderer";

export default class Cube3D extends Geometry {
  mesh = new THREE.Mesh();

  constructor() {
    super();
    this.copy(new THREE.BoxGeometry(10, 10, 10));
    this.mesh.geometry = this;
    this.mesh.material = new THREE.MeshNormalMaterial();
    Renderer.Scene.add(this.mesh);
    this.setAt0Y()
    this.mesh.onAfterRender = () => {
      this.mesh.rotateX(0.01);
      this.mesh.rotateZ(0.01);
    };
  }

  private setAt0Y() {
    this.mesh.geometry.computeBoundingBox();
    var boundingBox = this.mesh.geometry.boundingBox;
    this.mesh.translateY(-boundingBox.min.y);
  }
}
