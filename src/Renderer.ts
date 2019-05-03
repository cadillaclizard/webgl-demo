import * as THREE from "three";
import Cube3D from "./Util/Cube3D";
import Mouse from "./Util/Mouse";
import Camera from "./Util/Camera";
import Window from "./Util/Window";
import { Object3D } from "three";

export default class Renderer {
  static Scene = new THREE.Scene();

  window: Window;
  camera: Camera;
  mouse = new Mouse();
  raycaster = new THREE.Raycaster();
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });

  test: any[] = [];

  constructor() {
    this.camera = new Camera();
    this.window = new Window(this.renderer, this.camera);

    // Helper
    Renderer.Scene.add(new THREE.AxesHelper(10000));
    Renderer.Scene.add(new THREE.AxesHelper(-10000));
  }

  public mount(container: Element) {
    // Request first animation frame    
    Renderer.Scene.add(new THREE.AmbientLight(0xffffff, 0.1));
    container.appendChild(this.renderer.domElement);
    this.window.update();
    this.renderer.setAnimationLoop(this.renderScene);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    // Temp
    var cube1 = new Cube3D();
    var cube2 = new Cube3D();
    cube1.mesh.translateX(-75);
    cube2.mesh.translateX(75);
  }

  private renderScene = () => {
    this.camera.lookAt(Renderer.Scene.position);
    this.raycaster.setFromCamera(this.mouse, this.camera);
    var intersects = this.raycaster.intersectObjects(Renderer.Scene.children);
    
    for (var i = 0; i < intersects.length; i++) {
      console.debug((intersects[i].object as any).constructor.name);
    };
    /*if (intersects.length > 0) {
      if (this.INTERSECTED != intersects[0].object.position) {
        if (this.INTERSECTED) this.INTERSECTED.material.emissive.setHex(this.INTERSECTED.currentHex);
        INTERSECTED = intersects[0].object;
        INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
        INTERSECTED.material.emissive.setHex(0xff0000);
      }
    } else {
      if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
      INTERSECTED = null;
    }*/

    this.renderer.render(Renderer.Scene, this.camera);

  }
}
