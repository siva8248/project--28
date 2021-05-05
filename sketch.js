const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var paper1,ground,bin1,sling,gd,gd2;

function setup() {
	createCanvas(1100, 500);
	engine = Engine.create();
	world = engine.world;
	paper1 = new ball(50,50,70);
	sling = new SlingShot(paper1.body,{x:450, y:200});
	ground = new Ground(500,480,1000,20);
  gd = new Ground(500,1,1000,20);
	gd2 = new Ground(1000,250,10,800);
	bin1 = new dusbin(900,460,1,10);
	Engine.run(engine);
}

function draw() {
  background("white");
  Engine.update(engine);
  paper1.display();
  ground.display();
  bin1.display();
  //gd2.display();
  sling.display();
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
}
