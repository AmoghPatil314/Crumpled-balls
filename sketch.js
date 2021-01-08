
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world,engine;

var ground;

var bin;

var paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,600,width,20);
	
	paper=new Ball(80,80,70);

	bin=new Bin(500,650)  
}


function draw() {
  Engine.update(engine);
  background(255);
  
  ground.display();
  bin.display();
  paper.display();


  Engine.update(engine);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}
}