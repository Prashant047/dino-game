import elements from './game_elements';

const ufos = [
    {
        element: elements.ufo_1,
        w_h_ratio: 137/96
    },
    {
        element: elements.ufo_2,
        w_h_ratio: 144/70
    },
    {
        element: elements.ufo_3,
        w_h_ratio: 61/62
    }
];

export class UFO{
    /**
     * 
     * @param {Number} x
     * @param {CanvasRenderingContext2D} ctx 
     */
    constructor(x, ctx){
        this.x = x; 
        this.y = [50, 100, 150][Math.floor(Math.random()*3)];
        this.ctx = ctx;
        this.ufo = ufos[Math.floor(Math.random()*ufos.length)];
        this.speed = Math.random()*1 + 0.5;
    }

    draw(){
        let scale = 30 + 20*(this.speed - 0.5);
        this.ctx.drawImage(this.ufo.element,this.x, this.y, scale, scale/this.ufo.w_h_ratio);
    }

    update(){
        this.x -= this.speed;
    }
}

export const get_random_ufo_gap = () => {
    return [200,300,400][Math.floor(Math.random()*3)];
};