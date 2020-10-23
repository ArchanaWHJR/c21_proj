var bullet,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 20, 10);
  bullet.shapeColor ="white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor ="black";
  bullet.velocityX = speed;
}

function draw() {
  
    background("pink");  
  
    if(hasCollided(bullet, wall))
    {
            bullet.velocityX=0;
            var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness); 
          if(damage>10)
          {
              wall.shapeColor="green";
            
          }

          if(damage<10)
          {
              wall.shapeColor="red";
          }
    
    }

    drawSprites();
   
  }
  
  
  function hasCollided(lbullet, lwall)
  {
    bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }
  