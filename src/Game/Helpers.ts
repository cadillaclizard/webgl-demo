import * as THREE from "three";
import Renderer from "../Renderer";

export default class Helpers {
  constructor() {
    // Axis helper
    Renderer.Scene.add(new THREE.AxesHelper(5));

    // Grid
    var gridGeometry = new THREE.PlaneBufferGeometry(100000, 100000);
    var gridMaterial = new THREE.MeshBasicMaterial({ opacity: 0, transparent: true });
    gridGeometry.rotateX(-Math.PI / 2);
    var grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.name = "grid";
    Renderer.Scene.add(grid)
  }
}
