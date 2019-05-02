import * as THREE from "three";
import Renderer from "../Renderer";

export default class Camera extends THREE.PerspectiveCamera {
  constructor() {
    super(45, 4 / 3, 1, 100000);

    this.position.copy(new THREE.Vector3(50, 200, 250));
    this.add(new THREE.PointLight(0xffffff, 0.5))
    Renderer.Scene.add(this);

    document.addEventListener("wheel", (e: MouseWheelEvent) => {
      this.position.setZ(this.position.z + e.deltaY * 0.1);
    }, false);
  }
}
