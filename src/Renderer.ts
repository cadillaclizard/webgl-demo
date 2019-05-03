import * as THREE from "three";
import Cube3D from "./Util/Cube3D";
import Mouse from "./Util/Mouse";
import IsometricCamera from "./Util/IsometricCamera";
import Window from "./Util/Window";
import Helpers from "./Util/Helpers";
import IsometricOrbitControls from "./Util/IsometricOrbitControls";

export default class Renderer {
  static Scene = new THREE.Scene();

  helpers = new Helpers();
  camera = new IsometricCamera();
  controls = new IsometricOrbitControls(this.camera);
  mouse = new Mouse();
  raycaster = new THREE.Raycaster();
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  window = new Window(this.renderer, this.camera);

  public mount(container: Element) {
    container.appendChild(this.renderer.domElement);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setAnimationLoop(this.renderScene);
    this.window.onWindowResize();

    // Temp
    new Cube3D();
  }

  private renderScene = () => {
    this.camera.lookAt(Renderer.Scene.position);
    this.controls.update();
    this.renderer.render(Renderer.Scene, this.camera);
  }
}
