import * as THREE from "three";
import StatsUI from "./util/StatsUI"
import Mouse from "./util/Mouse";
import IsometricCamera from "./util/IsometricCamera";
import Window from "./util/Window";
import Helpers from "./util/Helpers";
import IsometricOrbitControls from "./util/IsometricOrbitControls";
import World from "./util/World";

export default class Renderer {
  static Scene = new THREE.Scene();

  statsUI = new StatsUI();
  controls!: IsometricOrbitControls;
  helpers = new Helpers();
  camera = new IsometricCamera();
  world = new World(this.camera);
  mouse = new Mouse();
  raycaster = new THREE.Raycaster();
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  window = new Window(this.renderer, this.camera);

  public mount() {
    document.body.appendChild(this.renderer.domElement);
    this.renderer.setSize(document.body.clientWidth, document.body.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setAnimationLoop(this.renderScene);
    this.renderer.shadowMap.enabled = true;
    this.window.onWindowResize();
    this.controls = new IsometricOrbitControls(this.camera, document.body);
    this.controls.addEventListener("change", () => this.world.update());
  }

  private renderScene = () => {
    this.camera.lookAt(Renderer.Scene.position);
    this.controls.update();

    this.statsUI.update();
    this.renderer.render(Renderer.Scene, this.camera);
  }
}
