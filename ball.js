class Ball {
  constructor(xPos, yPos,radius) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.xPos=xPos;
      this.yPos=yPos;
      this.radius=radius;
      this.image=loadImage("paper ball.png");
      this.body=Bodies.circle(this.xPos,this.yPos,(this.radius-20)/2,options);
      World.add(world,this.body);
  }

  display(){
      var paperPos=this.body.position;
      push();
      translate(paperPos.x, paperPos.y);
      /*ellipseMode(RADIUS);
      strokeWeight(3);
      fill(255,0,255);
      circle(0,0,this.radius);*/
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
      pop();
  }
};  