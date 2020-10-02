class Mango{
constructor(x,y){

var options={

isStatic:true,
restitution:0,
friction:1.0
}

this.body=Bodies.circle(x,y,40,options);
this.radius=40;
this.image = loadImage("Images/mango.png");
World.add(world,this.body);

}

display(){

var pos = this.body.position;
//push();
//translate(pos.x, pos.y);
imageMode(CENTER);
image(this.image,pos.x,pos.y,60,60);
//fill("pink");
//ellipseMode(CENTER);
 //ellipse(pos.x,pos.y,this.radius,this.radius);
 //pop();
}

}