import * as THREE from "three";

import Renderer from "../Renderer";

export default class Camera extends THREE.PerspectiveCamera {
  constructor() {
    super(45, 4 / 3, 1, 100000);
    var dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(12.5, 50, 25);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    var d = 50;
    dirLight.shadow.camera.left = - d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = - d;
    dirLight.shadow.camera.far = 3500;
    dirLight.shadow.bias = - 0.0001;
    Renderer.Scene.add(dirLight);
    Renderer.Scene.add(new THREE.DirectionalLightHelper(dirLight, 10));

    var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    Renderer.Scene.add(new THREE.HemisphereLightHelper(hemiLight, 10));

    this.position.set(25, 100, 25);
    this.rotation.y = - Math.PI / 4;
    this.rotation.x = Math.PI / 4;
  }
}
