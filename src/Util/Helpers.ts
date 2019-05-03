import * as THREE from "three";
import Renderer from "../Renderer";

export default class Helpers {
  constructor() {
    // Axis helper
    Renderer.Scene.add(new THREE.AxesHelper(10000));
    Renderer.Scene.add(new THREE.AxesHelper(-10000));

    // Grid
    var gridGeometry = new THREE.PlaneBufferGeometry(1000, 1000, 100, 100);
    var gridMaterial = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.25, transparent: true, side: THREE.DoubleSide });
    gridGeometry.rotateX(Math.PI / 2);
    var grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.name = "grid";
    Renderer.Scene.add(grid);
  }
}
