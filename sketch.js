const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4;
var world,boy, string1;

function preload() {
	boy=loadImage("images/boy.png");
	stoneObj=loadImage("images/stone.png")
  }

function setup()     
{
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1080,200,30);
	mango3=new mango(1040,150,30);
	mango4=new mango(950,180,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj= new Rock(210, 390, 50, 50); 
	string1 = new Elastic(stoneObj.body, {x: 240, y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
 //image(stoneObj, 210, 390, 50, 50)

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
 string1.display();
  groundObject.display();
}
