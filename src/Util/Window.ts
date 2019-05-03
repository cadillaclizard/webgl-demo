import * as THREE from "three";
import IsometricCamera from "./IsometricCamera";

export default class Window {

  constructor(private renderer: THREE.Renderer, private camera: IsometricCamera) {
    window.addEventListener("resize", this.onWindowResize, false);
  }

  public onWindowResize = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();    
  }
}
