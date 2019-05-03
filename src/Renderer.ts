import * as THREE from "three";
import Cube3D from "./Util/Cube3D";
import Mouse from "./Util/Mouse";
import IsometricCamera from "./Util/IsometricCamera";
import Window from "./Util/Window";
import Helpers from "./Util/Helpers";
import Controls from "./Util/Controls";

export default class Renderer {
  static Scene = new THREE.Scene();

  helpers = new Helpers();
  camera = new IsometricCamera();
  controls = new Controls(this.camera);
  mouse = new Mouse();
  raycaster = new THREE.Raycaster();
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  window = new Window(this.renderer, this.camera);

  constructor() {
    Renderer.Scene.add(new THREE.AmbientLight(0xffffff, 0.1));
  }

  public mount(container: Element) {
    container.appendChild(this.renderer.domElement);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.window.update();
    this.renderer.setAnimationLoop(this.renderScene);

    // Temp
    var geometry = new THREE.PlaneBufferGeometry(10000, 10000, 100, 100);
    var material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.5, transparent: true });
    var grid = new THREE.Mesh(geometry, material);
    grid.rotation.x = - Math.PI / 2;
    Renderer.Scene.add(grid);
    new Cube3D();
  }

  private renderScene = () => {
    this.camera.lookAt(Renderer.Scene.position);
    this.renderer.render(Renderer.Scene, this.camera);
  }
}
