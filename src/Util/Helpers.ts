import * as THREE from "three";
import Renderer from "../Renderer";

export default class Helpers {
  constructor() {
    // Axis helper
    Renderer.Scene.add(new THREE.AxesHelper(10000));
    Renderer.Scene.add(new THREE.AxesHelper(-10000));

    // Grund grid
    var geometry = new THREE.PlaneBufferGeometry(1000, 1000, 100, 100);
    var material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.25, transparent: true });
    var grid = new THREE.Mesh(geometry, material);
    grid.rotation.x = Math.PI / 2;
    Renderer.Scene.add(grid);
  }
}
