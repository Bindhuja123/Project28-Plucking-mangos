
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree,stone;
var mango1,mango2,mango3,mango4,mango5;
var boy;
var rope;
function preload()
{
	boy=loadImage("Images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground();
tree = new Tree();
stone = new Stone(40,500)

mango1 = new Mango(500,300);
mango2 = new Mango(600,300);
mango3 = new Mango(700,300);
mango4 = new Mango(500,400);
mango5 = new Mango(600,400);


rope = new Rope(stone.body,{x:90,y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  tree.display();
  
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,150,570,200,300);
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  rope.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  rope.fly();
}

function detectCollision(lstone,lmango){

  var stoneBodyPosition = lstone.body.position;
  var mangoBodyPosition = lmango.body.position;
  

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance<=lstone.radius+lmango.radius){

    Matter.Body.setStatic(lmango.body,false);

  }


}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  rope.attach(stone.body);
	}
  }





