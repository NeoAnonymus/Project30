class block{
    constructor(x, y, width, height, angle) {
        var options = {
          isStatic:false,
            'restitution':0.01,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255
        this.image = loadImage("wood1.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        if(this.body.speed<4){
          
        }else{
          World.remove(world,this.body)
          
          this.visibility = this.visibility-5
          tint(255,this.visibility)
          image(this.image,this.body.position.x,this.body.position.y,50,50)
          
        }
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}