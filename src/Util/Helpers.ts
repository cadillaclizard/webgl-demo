import * as THREE from "three-full";
import Renderer from "../Renderer";

export default class Helpers {
  constructor() {
    Renderer.Scene.add(new THREE.AxesHelper(10000));
    Renderer.Scene.add(new THREE.AxesHelper(-10000));
  }
}
