var ship, shipshaking;
var sea, seaimg;

function preload(){
shipshaking = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
seaimg=loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200,400,400)
  sea.addImage(seaimg)
  sea.scale=0.3
  ship = createSprite(50,50,200,200)
  ship.addAnimation("shaking", shipshaking);
  ship.scale=0.2;
  ship.x=100
  ship.y=200
}

function draw() {
  background("white");
sea.velocityX=-4
console.log(sea.y)
if (sea.x<0) {
  sea.x = sea.width/7;
}
  drawSprites();
}
