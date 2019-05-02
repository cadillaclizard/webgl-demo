import * as THREE from "three";
import { BufferGeometry } from "three";

export default class Cube3D extends BufferGeometry {
  material = new THREE.MeshLambertMaterial();
  mesh = new THREE.Mesh();
  scene: THREE.Scene;  

  constructor(scene: THREE.Scene) {
    super();
    this.scene = scene;
    this.copy(new THREE.BoxBufferGeometry(50, 50, 50));
    this.mesh.geometry = this;
    this.mesh.material = this.material;    
    scene.add(this.mesh);    
  }

  autoRotateY() {
   // this.mesh.onAfterRender = () => this.mesh.geometry.rotateY(0.1);  
  }
  autoRotateX() {
    //this.mesh.onAfterRender = () => this.mesh.geometry.rotateX(0.1);  
  }
}
