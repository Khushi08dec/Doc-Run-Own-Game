const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var canvas
var player, ground, ball
var balls = []
var life = 5

function setup(){
    canvas = createCanvas(displayWidth, displayHeight);

    engine = Engine.create();
    world = engine.world;
    player = new Player(500, height-250);
    ground = new Ground(width/2, height-50, width);

    function collsion(event){
      var pairs = event.pairs;

      for(var i = 0; i<balls.length; i++){
        var labelA = pairs[i].bodyA.label
        var labelB = pairs.bodyB.label
        
        if(labelA === virus && labelB === doc){
          console.log("xyz");
        }
      }    
    }
    
}   

function draw(){
  background("black");
    Engine.update(engine);

    player.display();

    if(keyDown(RIGHT_ARROW)){
      Matter.Body.translate(player.body, {x:10, y:0});
    }

    if(keyDown(LEFT_ARROW)){
      Matter.Body.translate(player.body, {x:-10, y:0});
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



