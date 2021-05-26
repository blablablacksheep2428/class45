var mainHero,heroImage,soleAlien,aliensPic
var backGround,groundImg;
var invGround;
var treasure,treasurePic

function preload(){
 heroImage = loadImage("MainCharecter1lol.png")
 groundImg = loadImage("Saturn1.png")
 aliensPic = loadImage("Alien.png")
 treasurePic = loadImage("Treasure.png") 
}
function setup(){
 createCanvas(500,500)
  backGround = createSprite(250,250,500,500)
  backGround.addImage("hacks",groundImg);
  backGround.scale = 7
  backGround.velocityX = -5
  mainHero = createSprite(10,250,10,10)
  mainHero.addImage("hero",heroImage)
  mainHero.scale = 0.2
  soleAlien = createSprite(480,250,10,10)
  soleAlien.addImage("lol",aliensPic)
  soleAlien.scale = 0.2 
  treasure = createSprite(480,280,10,10)
  treasure.addImage("hall",treasurePic)
  treasure.scale = 0.05
  invGround = createSprite(250,300,500,10);
  invGround.visible = false
}
function draw(){
  if(keyDown("w")||keyDown(UP_ARROW)){
    mainHero.velocityY=-8
  }
  if(backGround.x<0){
    backGround.x = 250
  }
  mainHero.velocityY = mainHero.velocityY + 0.5
  mainHero.collide(invGround)
  spawnAliens()
 drawSprites()
}
function spawnAliens(){
  if (frameCount % 60 === 0)
  {var aliens = createSprite(410,250,10,10);
   aliens.addImage("jk",aliensPic)
   aliens.scale = 0.18
   aliens.velocityX=-5
  }
  }