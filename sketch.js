var canvas, bgImg
var player, ground, ball, playerImg
var balls = []
var score = 0;

function preload(){
  bgImg = loadImage("Images/bg.jpg");
}

function setup(){
    canvas = createCanvas(displayWidth, displayHeight);
    image(bgImg, displayWidth/2, displayHeight/2, displayWidth, displayHeight)

    ground = new Ground(width/2, height-10, displayWidth);
    player = new Player(800, height-200);

}

function draw(){

  background(bgImg);
   
    ground.display();
    player.display();

    fill("blue");
    textSize(28)
    text("SCORE: " + score, displayWidth-200, 200);
    
    if(keyDown(RIGHT_ARROW)){
        player.x =  player.x + 10;
    }

    if(keyDown(LEFT_ARROW)){
      player.x =  player.x - 10;
  }

   if(frameCount%50 === 0){
     ball = new Ball(random(width), -10);
     balls.push(ball);
  
   }

   for(var i=0; i<balls.length; i++ ){  //starting point, ending point, incrememts 
      balls[i].display();
      balls[i].move();

      if(balls[i].hits(player)){
          balls.splice(i, 1);
        } 

        if(balls[i].hits(ground)){
          balls.splice(i, 1);
        }
    
   }


  }


 


  


