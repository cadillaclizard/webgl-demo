import * as THREE from "three";
import { BufferGeometry, Geometry } from "three";
import Renderer from "../Renderer";

export default class Cube3D extends BufferGeometry {
  mesh = new THREE.Mesh();

  constructor(x: number, y: number, z: number) {
    super();
    this.copy(new THREE.BoxBufferGeometry(10, 10, 10));
    this.mesh.geometry = this;
    this.mesh.material = new THREE.MeshNormalMaterial();
    this.translate(10 * x + 5, 10 * y + 5, 10 * z + 5)
    Renderer.Scene.add(this.mesh);
  }
}
