var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 100, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200,400,100,80);
  movingRect.shapeColor = "green";
  fixedRect.velocityY = +5 ;
  movingRect.velocityY = -5;
}
function draw() {
  background(255,255,255);
  
  if(movingRect.y -fixedRect.y< movingRect.height/2 + fixedRect.height/2 &&
     fixedRect.y-movingRect.y< movingRect.height/2 + fixedRect.height/2 ){
      fixedRect.velocityY = fixedRect.velocityY *(-1) ;
      movingRect.velocityY = movingRect.velocityY *(-1);
  }
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

//  if(movingRect.x -fixedRect.x < movingRect.width/2+fixedRect.width/2  && 
  //  fixedRect.x- movingRect.x < movingRect.width/2+fixedRect.width/2 &&
 //   fixedRect.y- movingRect.y < movingRect.height/2+fixedRect.height/2 &&
 //   movingRect.y-fixedRect.y< movingRect.height/2+fixedRect.height/2  ){
  //  fixedRect.shapeColor = "red";
  //  movingRect.shapeColor = "red";

 // }
 // else{
 //   movingRect.shapeColor = "green"
 //   fixedRect.shapeColor = "green";
//  }
  drawSprites();
}