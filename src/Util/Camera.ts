import * as THREE from "three";
import { Vector3 } from "three";

export default class Camera extends THREE.PerspectiveCamera {
  constructor(private scene: THREE.Scene, position = new Vector3(0, 0, 250), ...lights: THREE.Light[]) {
    super(45, 4 / 3, 1, 100000);

    this.position.copy(position);
    lights.forEach(light => this.add(light));
    this.scene.add(this);

    // Handle zoom
    document.addEventListener("wheel", (e: MouseWheelEvent) => {
      this.position.setZ(this.position.z + e.deltaY * 0.1);
    }, false);
  }
}
