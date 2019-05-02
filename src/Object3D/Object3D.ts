import * as THREE from "three";
import { BufferGeometry } from "three";

export default class Object3D extends BufferGeometry {
  constructor(public scene: THREE.Scene) {
    super();
  }
}
