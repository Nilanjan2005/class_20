var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(600,800,100,80);
  movingRect.shapeColor = "green";
  gameObject1 = createSprite(100,200,50,50);
  gameObject1.shapeColor = "green";  
  gameObject2 = createSprite(200,200,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,200,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,200,50,50);
  gameObject4.shapeColor = "green";
  fixedRect.velocityY = +5 ;
  movingRect.velocityY = -5;
}
function draw() {
  background("black");
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  //if(isTouching(movingRect, gameObject1)) {
    //gameObject1.shapeColor = "blue";
    //movingRect.shapeColor = "blue";
 // }
  //else{
   // movingRect.shapeColor = "green"
   // gameObject1.shapeColor = "green"; 
     
 // }
  
  Bounceoff(movingRect,fixedRect);
 
  drawSprites();
  
}



