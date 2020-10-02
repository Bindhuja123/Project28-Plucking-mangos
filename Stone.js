class Stone{
    constructor(x,y){
    
    var options={
    
    isStatic:false,
    restitution:0,
    friction:1.0,
    density:1.2
    }
    
    this.body=Bodies.circle(x,y,30,options);
    this.radius=30;
    this.image = loadImage("Images/stone.png");
    World.add(world,this.body);
    
    }
    
    display(){
    
    var pos = this.body.position;
    //push();
    //translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,45,45);
    //fill("pink");
    //ellipseMode(CENTER);
     //ellipse(pos.x,pos.y,this.radius,this.radius);
     //pop();
    }
    
    }