var fixObject,movingObject;


function setup() {
  createCanvas(800,400);
  fixObject=createSprite(300,200,50,60);
  movingObject=createSprite(500,200,50,60);
  fixObject.shapeColor="Green";
  movingObject.shapeColor="Green";
  fixObject.debug=true;
  movingObject.debug=true;
}

function draw() {
  background(0,0,0);  
  movingObject.x=World.mouseX;
  movingObject.y=World.mouseY;
  isTouching();
  console.log(movingObject.x-fixObject.x);
  drawSprites();
}

function isTouching(){
  if(movingObject.x-fixObject.x<movingObject.width/2+fixObject.width/2 && 
    fixObject.x-movingObject.x<movingObject.width/2+fixObject.width/2 &&
    movingObject.y-fixObject.y<movingObject.height/2+fixObject.height/2 &&
    fixObject.y-movingObject.y<movingObject.height/2+fixObject.height/2){
    fixObject.shapeColor="Red";
    movingObject.shapeColor="Red";
  }else {
  fixObject.shapeColor="Green";
  movingObject.shapeColor="Green";
  }

}