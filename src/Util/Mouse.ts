import * as THREE from "three";

export default class Mouse extends THREE.Vector2 {
  constructor() {
    super();

    document.addEventListener("mousemove", (e: MouseEvent) => {
      this.x = (e.clientX - window.innerWidth / 2) / 2;
      this.y = (e.clientY - window.innerHeight / 2) / 2;
    }, false);
  }
}
