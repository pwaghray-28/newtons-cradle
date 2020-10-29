
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
frame = new Frame(400,100,200,10)
ball1 = new Ball(200,450,20)
ball2 = new Ball(240,450,20)
ball3 = new Ball(280,450,20)
ball4 = new Ball(320,450,20)
ball5 = new Ball(360,450,20)
rope1 = new Rope(ball1.body,frame.body,-90,0)
rope2 = new Rope(ball2.body,frame.body,-50,0)
rope3 = new Rope(ball3.body,frame.body,5,0)
rope4 = new Rope(ball4.body,frame.body,50,0)
rope5 = new Rope(ball5.body,frame.body,80,0)

  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("brown");
  frame.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
 


