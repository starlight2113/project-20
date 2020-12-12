//varibles
var car;
var wall;
var speed;
var weight;


function setup() {
  //creates canvas
  createCanvas(1600,400);
  
  //sets the speed and the weight randomly
  speed=random(55,90);
  weight=random(400,1500);

  //creates car sprite
  car=createSprite(50,200,50,50);
  //defines veloity x
  car.velocityX=speed;
  //sets the debug statement to false
  car.debug=false;

  //creates wall sprite
  wall=createSprite(1500,200,60,height/2);
  //gives the color to wall
  wall.shapeColor="white";
}


function draw() {
  //background
  background(0);
  
  //car touches the wall with random speeds and weights and gives color with random speeds and weights
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation > 180)
    {
      car.shapeColor=color("red");
    }

    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor=color("yellow");
    }

    if(deformation < 100)
    {
      car.shapeColor=color("green");
    }
  }

  //helps the sprites to display
  drawSprites();
}