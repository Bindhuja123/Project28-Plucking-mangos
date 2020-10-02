class Tree{
    constructor(){
    
    var options={
    
    isStatic:true,
    
    }
    this.width=500;
    this.height=500;
  
    this.body=Bodies.rectangle(550,410,100,100,options);
    World.add(world,this.body);
    this.image = loadImage("Images/tree.png");
    
    }
    
    display(){
    
    var pos = this.body.position;

    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
    //fill("yellow");
    //rectMode(CENTER);
     //rect(pos.x,pos.y,this.width,this.height);
    }
    
    }