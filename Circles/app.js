import { Shape } from "./shape.js";
import { Vector } from "./vector.js";
import { Circle } from "./circle.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.startTime = Date.now();
    this.frameRequestHandle = window.requestAnimationFrame(this.frameRequest);
    document.body.appendChild(this.canvas);

    this.shapes = new Circle();
  }

  frameRequest = () => {
    this.frameRequestHandle = window.requestAnimationFrame(this.frameRequest);

    const currentTime = Date.now();
    this.delta = (currentTime - this.startTime) * 0.001;
    this.startTime = currentTime;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // for (let i = 0; i < 10; i++) {
    //   this.shapes[i].update(this.delta);
    //   this.shapes[i].render(this.ctx);
    // }
  };
}

window.addEventListener("load", () => {
  new App();
});
