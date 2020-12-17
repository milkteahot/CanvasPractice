import { Shape } from "./shape.js";
import { Vector } from "./vector.js";

export class Circle extends Shape {
  radius: number;

  constructor(position: Vector, radius: number) {
    super(position);
    this.radius = radius;
  }

  update(delta) {}

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
