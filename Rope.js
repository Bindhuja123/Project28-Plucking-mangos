class Rope{
    constructor(bodyA,pointB){
     
        var options={
        bodyA : bodyA,
        pointB:pointB,
        
        stiffness :0.004,
        length : 1,
    
        }
        this.pointB=pointB;
        this.rope= Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    attach(body){
		this.rope.bodyA=body;
	}

     fly(){
         this.rope.bodyA=null;
     }
    display(){
    if(this.rope.bodyA){
        //var pointA=this.body.bodyA.position;
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        
        //var pointB=this.string.bodyB.position;
        strokeWeight(4);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    }
    }
    
    
    }