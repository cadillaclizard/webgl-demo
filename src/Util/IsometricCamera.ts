import * as THREE from "three";

import Renderer from "../Renderer";

export default class Camera extends THREE.PerspectiveCamera {
  constructor() {
    super(45, 4 / 3, 1, 100000);
    Renderer.Scene.add(this);
    Renderer.Scene.add(new THREE.AmbientLight(0x4444444));

    this.position.set(-1, 500, -1);
    this.rotation.y = - Math.PI / 4;
    this.rotation.x = Math.PI / 4;
  }
}
