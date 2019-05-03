import Renderer from "../Renderer";
import * as SimplexNoise from "simplex-noise";
import * as THREE from "three";
import { Vector3 } from "three";

export default class World {
  terrainMesh = new THREE.Mesh();
  lastCameraPos = new Vector3();
  noise = new SimplexNoise();
  cubesPos = new Array<Vector3>();
  radius = 25;

  constructor(private camera: THREE.Camera) {
    Renderer.Scene.add(this.terrainMesh);
    this.generateTerrain();
  }

  generateTerrain(centerX = 0, centerZ = 0) {
    this.computeHeights(centerX, centerZ);
    this.computeTerrain();
  }

  private computeHeights(centerX = 0, centerZ = 0) {
    this.cubesPos = new Array<Vector3>();
    let rr = this.radius * this.radius;

    for (let x = - this.radius; x < this.radius; x++) {
      for (let z = -this.radius; z < this.radius; z++) {
        if (x * x + z * z >= rr) continue;

        var posX = x + centerX;
        var posZ = z + centerZ;
        var noiseValue = this.noise.noise2D(posX / 75, posZ / 75);
        var posY = Math.round(noiseValue * 10);
        this.cubesPos.push(new Vector3(posX, posY, posZ));
      }
    }
  }

  private computeTerrain() {
    var light = new THREE.Color(0xffffff);
    var geometry = new THREE.Geometry();

    var pyGeometry = new THREE.PlaneGeometry(10, 10);
    pyGeometry.faces[0].vertexColors = [light, light, light];
    pyGeometry.faces[1].vertexColors = [light, light, light];
    pyGeometry.faceVertexUvs[0][0][1].y = 0.5;
    pyGeometry.faceVertexUvs[0][1][0].y = 0.5;
    pyGeometry.faceVertexUvs[0][1][1].y = 0.5;
    pyGeometry.rotateX(-Math.PI / 2);

    this.cubesPos.forEach(pos => {
      var cubeGeometry = pyGeometry.clone();
      var posX = pos.x * 10 + 5;
      var posY = pos.y * 10 + 5;
      var posZ = pos.z * 10 + 5;

      cubeGeometry.translate(posX, posY, posZ);
      geometry.merge(cubeGeometry);
    });

    var bufferGeometry = new THREE.BufferGeometry().fromGeometry( geometry );
    this.terrainMesh.geometry = bufferGeometry;
    this.terrainMesh.material = new THREE.MeshNormalMaterial();
    this.terrainMesh.updateMatrix();
  }

  update() {
    var origin = this.camera.position.clone();
    var direction = new Vector3();
    this.camera.getWorldDirection(direction);
    var grid = Renderer.Scene.getObjectByName("grid");
    var raycaster = new THREE.Raycaster(origin, direction);
    var inter = raycaster.intersectObject(grid as THREE.Object3D);

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