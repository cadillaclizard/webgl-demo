import * as StatsJS from "stats.js";

export default class StatsUI {
  private stats = new StatsJS();

  constructor() {
    var dom = this.stats.dom;

    dom.style.cssText = "float:right;display:flex;position:absolute;right:0;z-index:1000"
    dom.childNodes.forEach(childStatNode => {
      (childStatNode as HTMLElement).style.display = "block";
      (childStatNode as HTMLElement).addEventListener("click", e => e.stopPropagation());
    });
    document.body.appendChild(dom)
  }

  update = () => this.stats.update();
}
