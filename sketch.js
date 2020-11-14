var wall, bullet;
var speed, weight;
var thickness





function setup() {
  createCanvas(1600,400);
thickness = random (22, 83);
 bullet = createSprite (50, 200, 50, 5)
 bullet.shapeColor = "white";
wall = createSprite (1200, 200, thickness, height/2);
wall.shapeColor = "brown";
speed = random(223, 321);
weight = random(30, 52)


}

function draw() {
  background(0);
  
  bullet.velocityX = speed;
  if(wall.x - bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX=0; var deformation = 0.5*weight*speed*speed/22509
    if(deformation>180) { bullet.shapeColor=color(225,225,225);
    
    } 
    
    if(deformation<180 && deformation>100) {
      bullet.shapeColor=color(230,230,0); 
    
    }

    if(deformation<100) {
      bullet.shapeColor=color(0,255,0); 
    
    }
  
  }
  
  
 
  drawSprites();
}
function hasCollided (bullet, wall) {

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
      return true
  }
     return false
}