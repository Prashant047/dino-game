import {Obstacle, get_random_obstacle_gap, get_random_obstacle_grp} from './obstacle';
import {DustParticle, get_random_particle_gap, drawfloor} from './dust_particle';
import {UFO, get_random_ufo_gap} from './ufo';
import {Dino} from './dino';

let canvas = document.getElementById('can');
canvas.height = 500;
canvas.width = 950;


let ctx = canvas.getContext('2d');
const SPEED = 8;

const dino = new Dino(100,canvas.height-12,ctx);
dino.activate_listeners();

const pad_number = (size, num) => {
    let padded_num_string = '';
    let diff = size - num.toString().length;;

    for(let i=0;i < diff;i++){
        padded_num_string += '0';
    }
    padded_num_string += num.toString();
    return padded_num_string;

};

const check_overlap = (x1, y1, w1, h1, x2, y2, w2, h2) => {
    if(x1+w1<x2 || x2+w2<x1 || y1+h1<y2 || y2+h2<y1){
        return false;
    }
    return true;
};


const obstacleList = [new Obstacle(canvas.width,canvas.height-10,ctx, get_random_obstacle_grp())];
const floorParticles = [new DustParticle(canvas.width, Math.random()*10 + (canvas.height-18), ctx)];
const ufos = [new UFO(canvas.width, ctx)];


let obstacle_gap = get_random_obstacle_gap();
let particle_gap = get_random_particle_gap();
let ufo_gap = get_random_ufo_gap();

let score = 0;
let score_stepper = 0;
let score_step = 4;
let pause_game = false;

const gameLoop = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    // DRAWING FLOOR AND DUST PARTICLES
    drawfloor(ctx, canvas.height, canvas.width);
    floorParticles.forEach((particle, i) => {
        particle.draw();
        if(!pause_game){particle.update(SPEED);}

        if(particle.x < - 50){
            floorParticles.splice(i,1);
        }
        if(i == floorParticles.length-1){
            if(particle.x < canvas.width-particle_gap){
                floorParticles.push(new DustParticle(canvas.width, Math.random()*10 + (canvas.height-18), ctx));
                particle_gap = get_random_particle_gap();
            }
        }

    });

    //  DRAWING UFOs ---------------------
    ufos.forEach((ufo, i) => {
        ufo.draw();
        if(!pause_game){ufo.update();}

        if(ufo.x < -400){
            ufos.splice(i,1);
        }
        if(i == ufos.length-1){
            if(ufo.x < canvas.width - ufo_gap){
                ufos.push(new UFO(canvas.width, ctx));
                ufo_gap = get_random_ufo_gap();
            }
        }
    });



    // DRAWING OBSTACLES -----------------
    obstacleList.forEach((obstacle, i) => {
        obstacle.draw();
        if(!pause_game){obstacle.update(SPEED);}
        
        if(check_overlap(dino.x+13,dino.y-dino.height-5,dino.width-31,dino.height,obstacle.x,obstacle.y-obstacle.bounding_box_height,obstacle.bounding_box_width,obstacle.bounding_box_height)){
            console.log("hit");
            pause_game = true;
        }

        if(obstacle.x < -500){
            obstacleList.splice(i,1);
        }

        if(i == obstacleList.length-1){

            if(obstacle.x < canvas.width-obstacle_gap){
                obstacleList.push(new Obstacle(canvas.width,canvas.height-10,ctx, get_random_obstacle_grp()));
                // console.log("Pushed new obstacle");
                obstacle_gap = get_random_obstacle_gap();
            }
        }
    
    });

    // DRAWING DINO ---------------------
    dino.draw();
    if(!pause_game){dino.update();}

    // DISPLAY THE SCORE ----------------
    ctx.font = '25px ArcadeClassic';
    ctx.fillStyle = 'silver';
    ctx.fillText(pad_number(5, score),canvas.width - 100, 30);

    if(!pause_game){
        if(score_stepper > score_step){
            if(score < 99999){
                score++;
            }
            score_stepper = 0;
        }
        score_stepper++;
    }

    if(pause_game){
        ctx.font = '30px ArcadeClassic';
        ctx.fillStyle = 'silver';
        ctx.fillText('GAME OVER!',canvas.width/2 - 60, canvas.height/2 -10);

    }

    requestAnimationFrame(gameLoop);
};
gameLoop();
