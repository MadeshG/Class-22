const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ball,ground



function setup() {
  createCanvas(800,400);
 engine = Engine.create()
 world = engine.world
 ball = Bodies.circle(400,100,20)
 World.add(world,ball)
var Option = {
  isStatic:true
}


 ground = Bodies.rectangle(400,380,800,10,Option)
 World.add(world,ground)
}

function draw() {

  background(0)  
  Engine.update(engine)
 ellipse(ball.position.x,ball.position.y,40,40)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,800,10)
}