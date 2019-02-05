import * as THREE from "three";

interface MousePos {
  x: number;
  y: number;
}

export default class Renderer {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 2000);
  renderer = new THREE.WebGLRenderer({
    devicePixelRatio: window.devicePixelRatio,
  });
  mouse: MousePos = { x: 0, y: 0 }


  constructor() {
    // Lights & Camera
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    this.scene.add(ambientLight);
    var pointLight = new THREE.PointLight(0xffffff, 0.5);
    this.camera.add(pointLight);
    this.camera.position.z = 250;
    this.scene.add(this.camera);
  }

  public mount(container: Element) {
    // Mount events
    window.addEventListener("resize", this.onWindowResize, false);
    document.addEventListener("mousemove", this.onDocumentMouseMove, false);

    // Request first animation frame    
    container.appendChild(this.renderer.domElement);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setAnimationLoop(this.renderScene);
    this.onWindowResize();

    // temp
    var geometry = new THREE.BoxBufferGeometry(50, 50, 50);
    var material = new THREE.MeshLambertMaterial({ color: new THREE.Color(50, 0, 25) });
    var mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
    // temp    
  }

  private renderScene = () => {
    this.camera.position.x += (this.mouse.x - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouse.y - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize = () => {
    let width = this.renderer.domElement.parentElement!.clientWidth;
    let height = this.renderer.domElement.parentElement!.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private onDocumentMouseMove = (e: MouseEvent) => {
    this.mouse.x = (e.clientX - window.innerWidth / 2) / 2;
    this.mouse.y = (e.clientY - window.innerHeight / 2) / 2;
  }
}
