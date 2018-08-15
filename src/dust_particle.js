export class DustParticle{
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {CanvasRenderingContext2D} ctx 
     */
    constructor(x, y, ctx){
        this.x = x;
        this.y = y;
        this.w = Math.random()*5 + 5;
        this.ctx = ctx
    }

    /**
     * 
     * @param {Number} speed 
     */
    update(speed){
        this.x -= speed;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.lineWidth = "1"
        this.ctx.strokeStyle="green";
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x + this.w, this.y);
        this.ctx.closePath();
        this.ctx.stroke();
    }
}


const MIN_GAP = 15;
const MAX_GAP = 30;
export const get_random_particle_gap = () => {
    return Math.random()*(MAX_GAP-MIN_GAP) + MIN_GAP;
};

export const drawfloor = (ctx,top_offset, width) => {
    ctx.beginPath();
    ctx.lineWidth = "2"
    ctx.strokeStyle="green";
    ctx.moveTo(0, top_offset - 20);
    ctx.lineTo(width, top_offset - 20)
    ctx.closePath();
    ctx.stroke();
};
