import * as SimplexNoise from "simplex-noise";
import { Float32BufferAttribute, BufferGeometry, Vector2, Mesh, MeshPhongMaterial, Color } from "three";
import Renderer from "../Renderer";

export default class Terrain {
  mesh = new Mesh();
  position = new Vector2();
  noise = new SimplexNoise(`0`);


  constructor(position: Vector2, public radius = 25) {
    this.position = position;
    this.mesh.geometry = new BufferGeometry();
    this.mesh.material = new MeshPhongMaterial({ flatShading: true, color: new Color(0x7cfc00) })
    Renderer.Scene.add(this.mesh);
    this.createGeometry();
  }

  createGeometry() {
    var radius = this.radius;
    var diameter = radius * 2;
    var diameter1 = diameter + 1;

    // buffers
    var indices = [];
    var vertices = [];

    // generate vertices, normals and uvs
    for (let ix = 0; ix <= diameter; ix++) {
      var x = ix - radius;

      for (let iz = 0; iz <= diameter; iz++) {
        var z = iz - radius;

        var y = this.noise.noise2D((this.position.x + x) / 100, (-this.position.y + z) / 100);
        y = Math.round(y * 5);

        vertices.push(x, y, -z);
      }

    }

    // indices
    for (let ix = 0; ix < diameter; ix++) {
      var x = ix - radius;

      for (let iz = 0; iz < diameter; iz++) {
        var z = iz - radius;

        if (x * x + z * z >= radius * radius) {
          continue;
        }

        var a = ix + diameter1 * iz;
        var b = ix + diameter1 * (iz + 1);
        var c = (ix + 1) + diameter1 * (iz + 1);
        var d = (ix + 1) + diameter1 * iz;

        // faces
        indices.push(a, b, d);
        indices.push(b, c, d);
      }

    }

    // build geometry
    var geometry = this.mesh.geometry as BufferGeometry;
    geometry.setIndex(indices);
    geometry.addAttribute('position', new Float32BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();
    geometry.translate(this.position.x, 0, this.position.y);
  }
}
