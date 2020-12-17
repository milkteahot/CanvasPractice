import { Vector } from './vector.js';

export class Shape {

    constructor() {
    }

    update(delta){

    }

    render(ctx){

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        console.log(ctx, 'ctx-draw')
        
        this.point.update();
    
        ctx.arc(this.point.x, this.point.y, 30, 0, 2*Math.PI);
        ctx.fill();
      }
}