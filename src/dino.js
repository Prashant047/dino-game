import elements from './game_elements';
const w_h_ratio = 123/132;

export class Dino{
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {CanvasRenderingContext2D} ctx 
     */
    constructor(x, y, ctx){
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60/w_h_ratio;
        this.y_copy = y;
        this.ctx = ctx;
        this.element = elements.dino1;
        this.counter = 0;
        this.step_frame_delay = 5
        this.jump_velocity = 20;
        this.gravity = 1.25;
        this.is_jumping = false;
    }

    activate_listeners(){
        window.addEventListener('keypress',(event) => {
            // console.log(event.keyCode);
            if(event.keyCode == 32){
                console.log("space");
            }
            this.is_jumping = true;
        });
    }

    draw(boundingBox = false){
        this.ctx.drawImage(this.element, this.x, this.y-this.height, this.width, this.height);
        if(boundingBox){
            this.ctx.beginPath();
            this.ctx.rect(this.x+13, this.y-this.height, this.width-31, this.height-5);
            this.ctx.closePath();
            this.ctx.strokeStyle = 'blue';
            this.ctx.lineWidth = "2";
            this.ctx.stroke();
        }
    }

    update(){
        if(this.is_jumping == false){
            if(this.counter > this.step_frame_delay){
                if(this.element == elements.dino1){
                    this.element = elements.dino2;
                }
                else{
                    this.element = elements.dino1;
                }
                this.counter = 0;
            }
            this.counter++;

        }
        else{
            this.element = elements.dino3;
        }

        if(this.is_jumping){
            // this.element = elements.dino3;
        
            this.y -= this.jump_velocity 
            this.jump_velocity -= this.gravity;
            if(this.jump_velocity < 0 && this.y == this.y_copy){
                this.is_jumping = false;
                this.jump_velocity = 20;
            }
            
        }


    }
}
