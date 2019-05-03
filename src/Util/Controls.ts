import IsometricCamera from "./IsometricCamera";

export default class Controls {
  constructor(camera: IsometricCamera) {
    

    document.addEventListener("wheel", (e: MouseWheelEvent) => {
      //this.position.setZ(this.position.z + e.deltaY * 0.1);
    }, false);
  }
}
