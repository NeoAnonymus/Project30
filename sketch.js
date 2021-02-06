const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,catapultImg;
;

function preload() {
    backgroundImg = loadImage("castlebg.png");
    catapultImg = loadImage("catapult.png");
}

function setup(){
    var canvas = createCanvas(1366,600);
    engine = Engine.create();
    world = engine.world;


    ground1 = new ground(683,590,1366,20);
    stand1 = new ground(1100, 270, 210, 15);
    stand2 = new ground(700, 390, 210, 15);

//level one
block1 = new block(610,345,30,40);
block2 = new block(640,345,30,40);
block3 = new block(670,345,30,40);
block4 = new block(700,345,30,40);
block5 = new block(730,345,30,40);
block6 = new block(760,345,30,40);
block7 = new block(790,345,30,40);
//level two
 block8 = new block(640,305,30,40);
 block9 = new block(670,305,30,40);
 block10 = new block(700,305,30,40);
 block11= new block(730,305,30,40);
 block12 = new block(760,305,30,40);
 //level three
 block13= new block(670,265,30,40);
 block14= new block(700,265,30,40);
 block15= new block(730,265,30,40);
 //top
 block16= new block(700,225,30,40);

 //p2 level one
 block17 = new block(1040,240,30,40)
 block18 = new block(1070,240,30,40)
 block19 = new block(1100,240,30,40)
 block20 = new block(1130,240,30,40)
 block21 = new block(1160,240,30,40)
 //p2 level two
 block22 = new block(1070,220,30,40)
 block23 = new block(1100,220,30,40)
 block24 = new block(1130,220,30,40)
 //p2 level three
 block25 = new block(1100,200,30,40)


    stone1 = new stone(120,400,80,80);

   
    slingshot1 = new slingshot(stone1.body,{x:120, y:360});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    textSize(20)
fill("red")
text("Press Space to Reload the Catapult",50,50)

  stone1.display();
  
  image(catapultImg,40,370)
  ground1.display();
  stand1.display()
  stand2.display();

  slingshot1.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();    
  block12.display();
  block13.display();
  block14.display();
  block15.display(); 
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:120, y:400}) 
	  slingshot1.attach(stone1.body);
	}
  }
