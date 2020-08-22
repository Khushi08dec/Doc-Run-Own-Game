var canvas, bgImg
var player, ground, ball, playerAnim, playerAnim2, pingSound
var ogAnim, ogAnim2
var goImg;
var balls = []
var score = 0;
var lives = 5;
var mode = 0;


function preload(){
  bgImg = loadImage("Images/bg.jpg");

  goImg = loadImage("Images/gameOver.png")

  ogAnim = loadAnimation("Images/doc1.png");
  ogAnim2 = loadAnimation("Images/docCopy1.png")

  playerAnim = loadAnimation("Images/doc1.png", "Images/doc2.png", 
  "Images/doc3.png", "Images/doc4.png", "Images/doc5.png", "Images/doc6.png", "Images/doc7.png");

  playerAnim2 = loadAnimation("Images/docCopy1.png", "Images/docCopy2.png", 
  "Images/docCopy3.png", "Images/docCopy4.png", "Images/docCopy5.png", "Images/docCopy6.png", "Images/docCopy7.png");

  pingSound = loadSound("Images/ping.mp3")
  errorSound = loadSound("Images/error.mov")
  gameOverSound = loadSound("Images/gameOverSound.mp3")

}

function setup(){
    canvas = createCanvas(displayWidth, displayHeight);
    image(bgImg, displayWidth/2, displayHeight/2, displayWidth, displayHeight)

    ground = new Ground(width/2, height-10, displayWidth);
   // player = new Player(800, height-200);

   player = createSprite(800, height-150, 150, 300);
   player.addAnimation("original", ogAnim);
   player.addAnimation("spriteAnimate", playerAnim);
   player.addAnimation("spriteAnimateTwo", playerAnim2);
   player.addAnimation("original2", ogAnim2);

   player.scale = 1;

}

function draw(){

  background(bgImg);
   
    ground.display();
    //player.display();

    fill(252, 243, 0);
    textSize(28)
    text("SCORE: " + score, displayWidth-1370, 130);
    fill("red");
    textSize(28)
    text("LIVES: " + lives, displayWidth-1370, 170);


if(mode===0){
  textSize(35);
  fill("black");
  text("***DOC-RUN***", displayWidth/2-100, 300);
  textSize(28);
  text("Help Doc collect the virus and save the world!", displayWidth/2-150, 370);
  text("Use the arrow keys to steer him", displayWidth/2-150, 400);
  text("Get 10 points to clear LEVEL 1", displayWidth/2-150, 430);
  text("Press the space bar to start!", displayWidth/2-150, 460);

}

if(mode===0 && keyCode === 32){
  mode = 1;
}

if(mode===1){

  if(keyDown(RIGHT_ARROW) && player.x<1440 && lives>0){
    player.x =  player.x + 20;
    player.changeAnimation("spriteAnimate", playerAnim);
    
}

if(keyDown(LEFT_ARROW) && player.x>0 && lives>0){
  player.x =  player.x - 20;
  player.changeAnimation("spriteAnimateTwo", playerAnim2);
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
      score = score + 1;
      pingSound.play();
    } 

    if(balls[i].hits(ground)){
      balls.splice(i, 1);
      lives = lives - 1;
      errorSound.play();
    }

}

if(score===10 || lives ===0){
  player.changeAnimation("original", ogAnim)
  balls.length = 0;

  if(score===10){

    fill("black");
    var levelOneText = text("Level One Completed! Get 25 points to complete LEVEL 2", displayWidth/2-250, 350);
    levelOneText.visible = true;
   var levelOneTextTwo = text("Press N to play!", displayWidth/2-250, 400);
    levelOneTextTwo.visible = true;
  }

  if(lives===0){
    image(goImg, displayWidth/2, displayHeight/2, 400, 250);
    replayText = text("Press R to replay!", displayWidth/2-100, 300);
    replayText.visible = true;
   }
  
}


}  //MODE ONE ENDS

if(mode===1 && keyCode===78){
  mode=2;
}

if(mode===2){

  if(keyDown(RIGHT_ARROW) && player.x<1440 && lives>0){
    player.x =  player.x + 20;
    player.changeAnimation("spriteAnimate", playerAnim);
    
}

if(keyDown(LEFT_ARROW) && player.x>0 && lives>0){
  player.x =  player.x - 20;
  player.changeAnimation("spriteAnimateTwo", playerAnim2);
}

if(frameCount%40 === 0){
 ball = new Ball(random(width), -10);
 balls.push(ball);

}

for(var i=0; i<balls.length; i++ ){  //starting point, ending point, incrememts 
  balls[i].display();
  balls[i].move();

  if(balls[i].hits(player)){
      balls.splice(i, 1);
      score = score + 1;
      pingSound.play();
    } 

    if(balls[i].hits(ground)){
      balls.splice(i, 1);
      lives = lives - 1;
      errorSound.play();
    }

}

if(lives===0){
 player.changeAnimation("original", ogAnim)
 balls.length = 0;
 image(goImg, displayWidth/2, displayHeight/2, 400, 250);
 fill("black");
 text("Press R to Replay!", displayWidth/2-100, 300);
}

if(score===25){
  player.changeAnimation("original", ogAnim)
  balls.length = 0;
  fill("black");
  text("Congratulations, You Have Won!", displayWidth/2-100, 350)
  text("Press R to Replay!", displayWidth/2-100, 400)
}

}  //MODE TWO ENDS 

if(keyCode===82 && mode>0){
  lives=5;
  score=0;
  mode=0;
}
   
    drawSprites();

  }


 


  


