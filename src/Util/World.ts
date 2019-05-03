import Cube3D from "./Cube3D";
import * as SimplexNoise from "simplex-noise";

export default class World {
  noise = new SimplexNoise();
  radius = 10;
  //heights = new Array<number[][]>();

  generateTerrain(centerX = 0, centerZ = 0) {
    //this.heights = new Array<number[][]>();
    let rr = this.radius * this.radius;

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

  }
}