import IsometricCamera from "./IsometricCamera";
import * as THREE from "three";

export default class IsometricOrbitControls extends THREE.OrbitControls {
  constructor(camera: IsometricCamera) {
    super(camera);

    this.enableZoom = true;
    this.enablePan = true;
    this.maxPolarAngle = Math.PI / 4;
    this.minPolarAngle = Math.PI / 4;
  }
}