import Cube3D from "./Cube3D";
import * as SimplexNoise from "simplex-noise";
import { Camera, Vector3, Raycaster, Object3D } from "three";
import Renderer from "../Renderer";

export default class World {
  lastCameraPos = new Vector3();
  noise = new SimplexNoise();
  radius = 5;
  //heights = new Array<number[][]>();

  constructor(private camera: Camera) {
    this.generateTerrain(this.camera.position.x, this.camera.position.z);
  }

  generateTerrain(centerX = 0, centerZ = 0) {
    let rr = this.radius * this.radius;
    //this.heights = new Array<number[][]>();

    do {
      var cube = Renderer.Scene.getObjectByName("cube")

      if (cube != undefined) {
        Renderer.Scene.remove(cube);
      }
    } while (cube != undefined);

    for (let x = - this.radius; x < this.radius; x++) {
      for (let z = -this.radius; z < this.radius; z++) {
        if (x * x + z * z >= rr) continue;

        var posX = x + centerX;
        var posZ = z + centerZ;
        var y = this.noise.noise2D(posX / 75, posZ / 75);
        new Cube3D(posX, Math.round(y * 5), posZ)
      }
    }
  }

  update() {
    var origin = this.camera.position.clone();
    var direction = new Vector3();
    this.camera.getWorldDirection(direction);
    var grid = Renderer.Scene.getObjectByName("grid");
    var raycaster = new Raycaster(origin, direction);
    var inter = raycaster.intersectObject(grid as Object3D);

    if (inter[0] == undefined) return;

    var cameraX = Math.round(inter[0].point.x / 10);
    var cameraZ = Math.round(inter[0].point.z / 10);

    if (this.lastCameraPos.x != cameraX || this.lastCameraPos.z != cameraZ) {
      this.lastCameraPos.x = cameraX;
      this.lastCameraPos.z = cameraZ;
      this.generateTerrain(cameraX, cameraZ);
    }
  }
}