class Paper {
    constructor(x, y,radius) {
     
        var options ={
         isStatic:false,
         restitution:0.2,
         friction:0.3,
         density:1.2
        }
        this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      
      imageMode(CENTER);
      fill("white");
      image(this.image,pos.x, pos.y,this.radius);
    
     
    }
  }