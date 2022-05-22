var rocket, rocketImg
var earth , earthImg;
var bg;
var asteroids, asteroidsImg;



function preload(){
bg=loadImage("space.webp");
rocketImg=loadImage("Rocket-–-Featured-Image.png");
earthImg=loadImage("earth.png");
}

function setup(){
createCanvas(windowWidth,windowHeight)
rocket= createSprite(windowWidth/2,620,100,100)
rocket.addImage(rocketImg);
rocket.scale=0.3;
earth= createSprite(windowWidth/2,windowHeight/3.5,150,170)
earth.addImage(earthImg);







}

function draw(){
  background(bg)
  text(mouseX+ ","+mouseY, mouseX,mouseY);
  earth.rotation += 2;
 

  if (keyIsDown(RIGHT_ARROW)){
    rocket.x+=4;
  }
  if (keyIsDown(LEFT_ARROW)){
    rocket.x-=4;
  }
  if (keyIsDown(UP_ARROW)){
    rocket.y-=4;

  }
if (keyIsDown(DOWN_ARROW)){
  rocket.y+=4

}
if (rocket.collide(earth)){
  rocket.positionX=0.1;
}


  drawSprites()
}



