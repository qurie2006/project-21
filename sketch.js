var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 30, 20);
  bullet.velocityX = speed;
 wall = createSprite(1100, 200, thickness, height/2);
 wall.shapeColor  = color(80, 80, 80);
}

function draw() {
  background(255,255,255);  

  if(collided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness);

    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage < 10){
      wall.shapeColor = (0, 255, 0);
    }
  }
 
bullet.depth = wall.depth;
bullet.depth = bullet.depth+ 1;
drawSprites();
}

function collided(object1, object2){
object1RightEdge = object1.x + object1.width;
object2LeftEdge = object2.x;

if(object1RightEdge >= object2LeftEdge){
  return true;
}
return false;
}