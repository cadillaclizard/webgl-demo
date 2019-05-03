import * as THREE from "three";
import Camera from "./Camera";

export default class Window {

  constructor(private renderer: THREE.Renderer, private camera: Camera) {
    window.addEventListener("resize", this.onWindowResize, false);
  }

  private onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  update() { this.onWindowResize(); }
}
