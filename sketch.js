const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops;
var umbrella;
var thunder;

function preload(){
    umbrellaImg = loadImage("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");
    thunderImg = loadImage("3.png", "5.png");
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
}

function setup(){
    var canvas = createCanvas(500, 1200);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(5,height,500,20);

    var maxDrops = 100;

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrops(random(0,400), random(0,400)));
    }

    umbrella = new Umbrella(200,20,40,390);

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            default: break;
        }
        thunder.scale = random(0.3, 0.6)
    }
}


function draw(){

    ground.display();
    drops.display();
    umbrella.display();
    thunder.display();
    thunder1.display();
    thunder2.display();
}   

