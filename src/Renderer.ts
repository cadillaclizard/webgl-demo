import * as THREE from "three";
import { DoubleSide } from "three";
import Cube3D from "./Object3D/Cube3D";
import Mouse from "./Mouse/Mouse";

export default class Renderer {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 2000);
  renderer = new THREE.WebGLRenderer({
    devicePixelRatio: window.devicePixelRatio,
    alpha: true,
    antialias: true
  });
  mouse = new Mouse();

  constructor() {
    // Lights & Camera
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    this.scene.add(ambientLight);
    var pointLight = new THREE.PointLight(0xffffff, 0.5);
    this.camera.add(pointLight);
    this.camera.position.z = 250;
    this.scene.add(this.camera);
  }

  public mount(container: Element) {
    // Mount events
    window.addEventListener("resize", this.onWindowResize, false);

    // Request first animation frame    
    container.appendChild(this.renderer.domElement);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setAnimationLoop(this.renderScene);
    this.onWindowResize();

    var cube1 = new Cube3D(this.scene);
    var cube2 = new Cube3D(this.scene);
    cube1.translate(0, -50, 0);
    cube2.translate(0, 50, 0);
  }

  private renderScene = () => {
    this.camera.position.x += (this.mouse.x - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouse.y - this.camera.position.y) * 0.05;

    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize = () => {
    let width = this.renderer.domElement.parentElement!.clientWidth;
    let height = this.renderer.domElement.parentElement!.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
