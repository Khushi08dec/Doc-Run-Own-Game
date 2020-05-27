const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var canvas
var player, ground, ball
var balls = []

function setup(){
    canvas = createCanvas(displayWidth, displayHeight);

    engine = Engine.create();
    world = engine.world;
    player = new Player(500, height-70);
    ground = new Ground(width/2, height, width);
    
}   

function draw(){
  background("black");
    Engine.update(engine);

    player.display();

    if(keyDown(RIGHT_ARROW)){
      player.move(8, 0);
    }

    if(keyDown(LEFT_ARROW)){
      player.move(-8, 0);
    }

  
    ground.display();
    

   if(frameCount%50 === 0){
     ball = new Ball(random(width), -10);
     balls.push(ball);
  
   }

   for(var i=0; i<balls.length; i++ ){ //starting point, ending point, incrememts 
      balls[i].display();
   }

}


