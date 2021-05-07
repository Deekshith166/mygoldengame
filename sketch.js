var backwardwalkingimg,forwardwalkingimg,leftjumpingimg,rightjumpingimg
var ground;
var player;
function preload(){
  backwardwalkingimg=loadAnimation("Images/1.png","Images/2.png","Images/3.png","Images/4.png","Images/5.png","Images/6.png")
  leftjumpingimg=loadAnimation("Images/7.png","Images/8.png","Images/9.png","Images/10.png","Images/11.png","Images/12.png","Images/13.png","Images/14.png")
  forwardwalkingimg=loadAnimation("Images/1of1.png","Images/1of2.png","Images/1of3.png","Images/1of4.png","Images/1of5.png","Images/1of6.png")
  rightjumpingimg=loadAnimation("Images/1of7.png","Images/1of8.png","Images/1of9.png","Images/1of10.png","Images/1of11.png","Images/1of12.png","Images/1of13.png","Images/1of14.png")

}
function setup() {
  createCanvas(windowWidth,windowHeight)
  
ground = createSprite(width/2,height-30,width,20)

  backwardwalking=createSprite(450,height-200)
  backwardwalking.addAnimation("backwardwalking",backwardwalkingimg)
  backwardwalking.addAnimation("leftjumping",leftjumpingimg)
  forwardwalking=createSprite(400,height-200)
  forwardwalking.addAnimation("forwardwalking",forwardwalkingimg)
  forwardwalking.addAnimation("rightjumping",rightjumpingimg)

  backwardwalking.scale=0.2
  forwardwalking.scale=0.2
}

function draw() {
  background("Blue")
  if (keyDown("space")){
backwardwalking.velocityY=-10
backwardwalking.changeAnimation("leftjumping",leftjumpingimg)
  }
  if (keyDown("space")){
    forwardwalking.velocityY=-10
    forwardwalking.changeAnimation("rightjumping",rightjumpingimg)
      }
  
  
  backwardwalking.velocityY=backwardwalking.velocityY+0.5
  backwardwalking.collide(ground)
  forwardwalking.velocityY=forwardwalking.velocityY+0.5
  forwardwalking.collide(ground)

  

drawSprites();
}