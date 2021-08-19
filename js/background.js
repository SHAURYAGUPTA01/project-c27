class Background {
    constructor(x, y, width, height, bgPos, bgAnimation) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        label: "boat"
      };
      this.animation = bgAnimation;
      this.speed = 0.05;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
  
      this.bgPosition = bgPos;
      this.image = loadImage("assets/background.png");
      World.add(world, this.body);
    }
  
    animate() {
      this.speed += 0.05 % 1.1;
    }
  
    remove(index) {
     //  Matter.World.remove(world, boats[index].body);
     //   boats.splice(index, 1);
      this.animation = bgAnimation
      this.speed = 0.05
      this.width = 300 
      this.height = 300
      setTimeout(()=>{
      Matter.World.remove(world, bg[index].body);
      bg.splice(index, 1);
      } , 2000 )
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      var index = floor(this.speed % this.animation.length);
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0, this.bgPosition, this.width, this.height);
      noTint();
      pop();
    }
  }
  