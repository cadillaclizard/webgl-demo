import IsometricCamera from "./IsometricCamera";
import * as THREE from "three";

export default class IsometricOrbitControls extends THREE.OrbitControls {
  constructor(camera: IsometricCamera, domElement?: HTMLElement) {
    super(camera);

    this.maxPolarAngle = Math.PI / 4;
    this.minPolarAngle = this.maxPolarAngle;
    this.enableZoom = true;
    this.enablePan = true;
    this.enableKeys = true;
    this.enableDamping = true;
    this.dampingFactor = 0.1;
  }
}