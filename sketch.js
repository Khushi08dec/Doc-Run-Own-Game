const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var canvas
var player, ground

function setup(){
    canvas = createCanvas(displayWidth, displayHeight);

    engine = Engine.create();
    world = engine.world;
    player = new Player(500, 500);
    ground = new Ground(width/2, height, width)
}   

function draw(){
  background("black");
    Engine.update(engine);

    player.display();
    ground.display();

   if(player.x-ground.x < player.width/2 + ground.width/2 
       && ground.x - player.x < player.width/2 + ground.width/2
        && player.y-ground.y < player.height/2 + ground.height/2 
        && ground.y - player.y < player.height/2 + ground.height/2){
          console.log("xyz");
        }

}
