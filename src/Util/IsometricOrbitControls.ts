import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { MOUSE, Camera } from "three";

export default class IsometricOrbitControls extends OrbitControls {
  maxPolarAngle = Math.PI / 4; // Isometric angle
  minPolarAngle = Math.PI / 4; // Isometric angle

  rotateSpeed: number = 1;
  panSpeed: number = 1;
  dampingFactor = .1;

  //enableDamping = true;
  enableZoom = true;
  enablePan = true;

  constructor(camera: Camera) {
    super(camera);
    this.mouseButtons.PAN = MOUSE.LEFT;
  }
}