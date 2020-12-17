import { Shape } from "./shape.js";
import { Vector } from "./vector.js";

export class Circle extends Shape {
  constructor(position, radius) {
    super(10);
    console.log(this.radius, 'circle-r');
    this.radius = 10;
  }

  update(delta) {}

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
