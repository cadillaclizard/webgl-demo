import * as THREE from "three";
import Camera from "./Camera";

export default class Window {

  constructor(private renderer: THREE.Renderer, private camera: Camera) {
    window.addEventListener("resize", this.onWindowResize, false);
  }

  private onWindowResize = () => {
    let width = this.renderer.domElement.parentElement!.clientWidth;
    let height = this.renderer.domElement.parentElement!.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  update() { this.onWindowResize(); }
}
