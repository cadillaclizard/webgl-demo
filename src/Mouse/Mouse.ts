export default class Mouse {
  private _x = 0;
  private _y = 0;

  get x() { return this._x; }
  get y() { return this._y; }

  constructor() {
    document.addEventListener("mousemove", (e: MouseEvent) => {
      this._x = (e.clientX - window.innerWidth / 2) / 2;
      this._y = (e.clientY - window.innerHeight / 2) / 2;
    }, false);
  }
}
