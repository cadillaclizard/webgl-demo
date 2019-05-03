import * as THREE from "three-full";

export default class Mouse extends THREE.Vector3 {
  constructor() {
    super();

    document.addEventListener("mousemove", (e: MouseEvent) => {
      e.preventDefault();
      this.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.y = - (e.clientY / window.innerHeight) * 2 + 1;
    }, false);
  }
}
