
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var groundObj
var radius = 20


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius/2,ball_options)
	World.add(world, ball)

	groundObj = new Ground(width/2, 670, width, 20)
	leftObj = new Ground(1100, 600, 20, 120)


	Engine.run(engine);

	

	Matter.Bodies.circle(100, 200, 20, ball_options)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  leftObj.display()

  ellipse(ball.position.x, ball.position.y, radius, radius)
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:85,y:-85})
	}
}

