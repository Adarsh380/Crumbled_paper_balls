
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_options;
var ground;
var leftSide;
var rightSide;

function preload() {
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(500, 200, 10, ball_options);
	World.add(world, ball);

	ground = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(900, 600, 20, 120);
	rightSide = new Ground(1100, 600, 20, 120);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {

	background(0);

	Engine.update(engine);

	fill('yellow');
	ellipse(ball.position.x, ball.position.y, 10);

	ground.show();
	leftSide.show();
	rightSide.show();
}

function keyPressed() {

	if (keyCode == RIGHT_ARROW) {
		Body.applyForce(ball, ball.position, { x: 10, y: -10 });
	}

	if (keyCode == LEFT_ARROW) {
		Body.applyForce(ball, ball.position, { x: -10, y: -10 });
	}

	if (keyCode == DOWN_ARROW) {
		Body.applyForce(ball, ball.position, { x: 0, y: 10 });
	}

	if (keyCode == UP_ARROW) {
		Body.applyForce(ball, ball.position, { x: 0, y: -10 });
	}
}


