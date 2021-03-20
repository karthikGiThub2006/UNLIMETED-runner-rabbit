var press = 0;
var rabbit,rabbitAlive,rabbitHit,ground,grass,grassImage,clouds,cloudImage;
var score=0;
function preload() {
rabbitAlive = loadImage("rabbit Alive.PNG");
grassImage = loadImage("grass1.jpg");  
cloudImage = loadImage("clouds1.gif")  
}
function setup() {     
  createCanvas(400,400);
  ground = createSprite(50,400,800,40);
  rabbit = createSprite(50,350,40,40);
  rabbit.addImage("not hit",rabbitAlive);   
  rabbit.scale = 0.3;
  rabbit.changeImage("not hit");
}
function spawnClouds() {
if (frameCount % 60 === 0) { 
    cloud = createSprite(400,100,40,10); 
    cloud.addImage(cloudImage); 
    cloud.y = Math.round(random(90,230)); 
    cloud.scale = 0.1; 
    cloud.velocityX = -3;
  }
}  
function draw() {  

 background("white");
 score=score+(Math.round(getFrameRate()/20))

 if (keyDown("space")&&rabbit.y>=360)  {
  rabbit.velocityY = -10; 
 }  
  rabbit.velocityY = rabbit.velocityY + 0.5;
 
  spawnGrass();
  spawnClouds();
 rabbit.collide(ground); 
 
  
  drawSprites();
  fill("black");
  text("score"+score,300,70);
} 
function collide() {
rabbit.changeImage("hit");
}
function spawnGrass(){
if (frameCount % 60 === 0) {
grass = createSprite(400,358,30,30);
grass.addImage(grassImage)
grass.scale = 0.2;  
grass.velocityX = -4;
grass.life = 250;  

  
  
   grass.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
}
  
 
  

}