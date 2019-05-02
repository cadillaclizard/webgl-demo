import * as THREE from "three";
import Cube3D from "./Util/Cube3D";
import Mouse from "./Util/Mouse";
import Camera from "./Util/Camera";

export default class Renderer {
  scene = new THREE.Scene();
  camera: Camera;
  mouse = new Mouse();
  renderer = new THREE.WebGLRenderer({
    devicePixelRatio: window.devicePixelRatio,
    alpha: true,
    antialias: true
  });

  constructor() {
    // Lights & Camera
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    var pointLight = new THREE.PointLight(0xffffff, 0.5);
    this.scene.add(ambientLight);    
    this.camera = new Camera(this.scene, new THREE.Vector3(0, 0, 250), pointLight);

    // Helper
    this.scene.add(new THREE.AxesHelper(10000));
    this.scene.add(new THREE.AxesHelper(-10000));
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
    cube1.mesh.translateX(-75);
    cube2.mesh.translateX(75);
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
