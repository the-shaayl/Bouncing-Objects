var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 80, 50);
  movingRect = createSprite(800, 200, 50, 80);
  fixedRect.shapeColor = "Red";
  movingRect.shapeColor = "Red";
  fixedRect.velocityX = 5;
  movingRect.velocityX = -5;
}

function draw() {
  background(0,0,0);  

  

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){
      fixedRect.shapeColor = "blue";
      movingRect.shapeColor = "blue";
  }
  else { 
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 ){
     movingRect.velocityX = movingRect.velocityX * (-1);
     fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  
  if(movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);

  }
  drawSprites();

}