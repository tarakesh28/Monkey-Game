
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var score
var survivalTime=0;

function preload(){
  
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  FoodGroup= createGroup();
  obstacleGroup= createGroup();
}


function draw() {
  createCanvas(400,400);
  background(400);
 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100, 50)
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  
if (keyDown("space") && monkey.y>100){
    monkey.velocityY=-10
  }
  
    monkey.velocityY=monkey.velocityY+0.5;
    monkey.collide(ground);

    spawnFood();
    spawnObstacles();
  
 drawSprites();
}

function spawnFood(){
  if (World.frameCount%80===0){
      banana = createSprite(410,20,20,20);
      banana.addImage(bananaImage);
      banana.y=Math.round(random(120,200));
      banana.velocityX=-4;
      banana.scale=0.1;
      banana.lifetime=105;
      FoodGroup.add(banana);
      }
}

function spawnObstacles(){
  if(World.frameCount%300===0){
   obstacle = createSprite(400,315,20,20)
   obstacle.addImage(obstacleImage);
   obstacle.velocityX=-5;
   obstacle.scale=0.2;
   obstacle.lifetime=85;
   obstacleGroup.add(obstacle) 
 }
}
