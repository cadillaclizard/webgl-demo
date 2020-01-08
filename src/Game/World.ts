import Renderer from "../Renderer";
import Terrain from "./Terrain";
import * as SimplexNoise from "simplex-noise";
import * as THREE from "three";
import { Vector3, Vector2 } from "three";

export default class World {
  terrain = new Terrain(new Vector2(0, 0));
  lastCameraPos = new Vector3();
  noise = new SimplexNoise(`0`);
  radius = 25;

  constructor(private camera: THREE.Camera) { }

  update() {
    var origin = this.camera.position.clone();
    var direction = new Vector3();
    this.camera.getWorldDirection(direction);
    var grid = Renderer.Scene.getObjectByName("grid");
    var raycaster = new THREE.Raycaster(origin, direction);
    var inter = raycaster.intersectObject(grid as THREE.Object3D);

    if (inter[0] == undefined) return;

    var cameraX = Math.round(inter[0].point.x);
    var cameraZ = Math.round(inter[0].point.z);

    if (this.lastCameraPos.x != cameraX || this.lastCameraPos.z != cameraZ) {
      this.lastCameraPos.x = cameraX;
      this.lastCameraPos.z = cameraZ;
      this.terrain.position = new Vector2(cameraX, cameraZ);
      this.terrain.createGeometry();
    }
  }
}