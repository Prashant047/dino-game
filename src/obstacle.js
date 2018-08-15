import elements from './game_elements';

export class Obstacle{
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {CanvasRenderingContext2D} ctx 
     * @param {} grp 
     */
    constructor(x, y, ctx, grp){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.grp = grp;

        let max_height = this.grp[0].height;
        let min_height = this.grp[0].height;
        let bounding_box_width = 0;
        this.grp.forEach((obs,i) => {
            if(obs.height > max_height){max_height = obs.height;}
            if(obs.height < min_height){min_height = obs.height;}
            bounding_box_width += obs.width;
        });

        let avg_height = (max_height + min_height)/2;
        this.bounding_box_width = bounding_box_width;
        this.bounding_box_height = avg_height;


    }

    draw(boundingBox = false){

        let offset = 0;
        this.grp.forEach((obs, i) => {
            this.ctx.drawImage(obs.element, this.x+offset, this.y-obs.height, obs.width, obs.height);
            offset += obs.width;
        });
        if(boundingBox){
            this.ctx.beginPath();
            this.ctx.lineWidth = "2";
            this.ctx.strokeStyle="red";
            this.ctx.rect(
                this.x, 
                this.y-this.bounding_box_height,
                this.bounding_box_width,
                this.bounding_box_height
            );
            this.ctx.closePath();
            this.ctx.stroke();
        }
    }

    update(speed){
        this.x -= speed;
    }
}


export const get_random_obstacle_gap = () => {
    const obstacle_gap_list = [350, 400, 600, 550, 800];
    return obstacle_gap_list[Math.floor(Math.random()*obstacle_gap_list.length)];
}



export const get_random_obstacle_grp = () => {
    const obstacle_group_list = [
        [
            {
                element: elements.arrow,
                height: 80,
                width: 20
            },
            {
                element: elements.spear,
                height: 100,
                width: 20
            }
        ],
        [
            {
                element: elements.sword,
                height:50,
                width: 20
            }        
        ],
        [
            {
                element: elements.spear,
                height: 100,
                width: 20
            },
            {
                element: elements.sword,
                height: 50,
                width: 20
            },
            {
                element: elements.arrow,
                height: 80,
                width: 20
            }
        ],
        [
            {
                element: elements.sword,
                height:50,
                width: 20
            },
            {
                element: elements.sword,
                height:50,
                width: 20
            }  
        ],
        [
            {
                element: elements.spear,
                height: 100,
                width: 20
            },
            {
                element: elements.spear,
                height: 100,
                width: 20
            }
        ]
    ];
    return obstacle_group_list[Math.floor(Math.random()*obstacle_group_list.length)];
};