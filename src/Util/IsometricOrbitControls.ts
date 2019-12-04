import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { MOUSE, Camera } from "three";

export default class IsometricOrbitControls extends OrbitControls {
  maxPolarAngle = Math.PI / 4; // Isometric angle
  minPolarAngle = Math.PI / 4; // Isometric angle
  rotateSpeed: number = 1;
  panSpeed: number = 1;
  enableZoom = true;
  enablePan = true;

  mouseButtons = { LEFT: MOUSE.RIGHT, RIGHT: MOUSE.LEFT } as any;
}