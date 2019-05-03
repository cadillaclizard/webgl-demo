import * as THREE from "three";
import Renderer from "../Renderer";

export default class Camera extends THREE.PerspectiveCamera {
  constructor() {
    super(45, 4 / 3, 1, 100000);
    Renderer.Scene.add(this);

    this.position.set(25, 25, 25);
    this.rotation.y = - Math.PI / 4;
    this.rotation.x = Math.atan( - 1 / Math.sqrt( 2 ) ); 

    this.add(new THREE.PointLight(0xffffff, 0.5))
  }
}
