var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver;
var restart;
var gameOverImg;
var restartImg;
var score=0;
var ball;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4;

function preload(){
 appleImg=loadImage("apple.png");
 bananaImg=loadImage("banana.png");
peerImg=loadImage("peer.png");

  obstacle1 = loadImage("monster2.png");
  obstacle2= loadImage("monster4.png");
  obstacle3 = loadImage("monster5.png");
  obstacle4 = loadImage("monster6.png");
  gameOverImg=loadImage("GameOver.png");
  restartImg=loadImage("reset.png");
  strawberryImg=loadImage("strawberry-png.png");
  mangoImg=loadImage("mango_PNG.png");
  watermellonImg=loadImage("watermelon.png")
}
function setup(){
    canvas = createCanvas(1276,602);
    ball=createSprite(100,250,10,10);
    ball.shapeColor="red";
    ball.scale=0.2;
    gameOver=createSprite(638,200,30,20);
    restart=createSprite(638,400,30,20);
    gameOver.addImage("gameOver",gameOverImg);
    restart.addImage("restart",restartImg);
    gameOver.scale=0.3;
    restart.scale=0.3;
    gameOver.visible=false;
    restart.visible=false;
    
    obstaclesGroup = new Group();
    fruitsGroup= new Group();
}

function draw()
{
 background('black');
 
 if(gameState === PLAY){
  if(obstaclesGroup.isTouching(ball)){
      
      gameState = END;
  }
 
textSize(40);
fill("white");
textFont("ALGERIAN");
text("score:",score,50,500);


if(keyDown(UP_ARROW)){
  changePosition(0,-10);
}
else if(keyDown(DOWN_ARROW)){
  changePosition(0,10)
}
spawnObstacles();
spawnFruits();
ball.addImage(appleImg);

}

else if(gameState === END) {
  gameOver.visible = true;
  restart.visible = true;
  
  //set velcity of each game object to 0
  
  ball.velocityY = 0;
  ball.velocityX=0;
  obstaclesGroup.setVelocityXEach(0);
  
  obstaclesGroup.setLifetimeEach(-1);
  
  if(mousePressedOver(restart)) {
  reset();
}
  
}

drawSprites();
}
function changePosition(x,y){
  ball.x=ball.x+x;
  ball.y=ball.y+y;
}
function spawnObstacles() {
  if(frameCount % 150 === 0) {
    var obstacle = createSprite((1200),random(100,500),10,40);
    obstacle.velocityX = -4;
    obstacle.scale = 0.05;
    obstacle.lifetime = 300;
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      
      default: break;
    }
    
  
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
function spawnFruits() {
  if(frameCount % 70 === 0) {
      
  for(var i=0;i<5;i++)
 i.velocityX=-4;
  { if(i=1) {
     var banana=createSprite(1100,50,10,10)
      banana.addImage(bananaImg)
   banana.scale=0.02 }
     if(i=2) {
        var apple=createSprite(1100,170,10,10) 
        apple.addImage(appleImg) 
        apple.scale=0.2;} 
       if(i=3) { 
         var watermellon=createSprite(1110,290,10,10)
      watermellon.addImage(watermellonImg) 
         watermellon.scale=0.2;
        } 
         if(i=4) { 
           var mango=createSprite(1110,410,10,10)
          mango.addImage(mangoImg) 
          mango.scale=0.3;
          } 
         if(i=5) { 
           var peer=createSprite(1100,530,10,10)
          peer.addImage(peerImg) 
             peer.scale=0.2;
        } 
  }
  
  //add each obstacle to the group
}
  }


function reset(){
  gameState=PLAY ;
 gameOver.visible=false;
 restart.visible=false;
 obstaclesGroup.destroyEach();
 ball.x=250;
 ball.y=250;
 }
 