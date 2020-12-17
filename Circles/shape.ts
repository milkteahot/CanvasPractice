import { Vector } from './vector.js';

export class Shape {
    position: Vector;

    constructor(position: Vector) {
        this.position = position;
    }

    update(delta: number){

    }

    render(ctx: CanvasRenderingContext2D){

    }
}