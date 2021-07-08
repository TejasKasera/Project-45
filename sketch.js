function nonscroll(){
	window.scrollTo(0,0);
  }
  
window.addEventListener("scroll",nonscroll);
  
var man1;
var man2;
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var tappu;
var groundIMG, ground;
var backIMG, backg;
var g;
var time;
var obstacle1;
var obstacle2;
var tappuIMG, tappu;
var plate1;

function preload()
{
    backIMG = loadImage("images/background.jpg");
	tappuIMG = loadImage("images/tappu.png");
	tappu1IMG = loadImage("images/tappu1.png");
	tappu2IMG = loadImage("images/tappu2.png");
	tappu3IMG = loadImage("images/tappu3.png");
	obst1IMG = loadImage("images/smallobstacle.png");
	obst2IMG = loadImage("images/obstacle2.png");
}

function setup() {
	createCanvas(1300,700);

  backg = createSprite(650,310,500,150);
  backg.addImage(backIMG);
  backg.scale = 1.9;

  man1 = createSprite(100,20,20,20);
  man1.shapeColor = "black"
  man1.velocityX = 10;
  man1.visible = false;

  man2 = createSprite(105,20,20,20);
  man2.shapeColor = "black"
  man2.visible = false;

  tappu = createSprite(100,570,30,30);
  tappu.addImage(tappuIMG);
  tappu.scale = 0.4;

  
	obstacle1 = createSprite(1000,570,10,10);
	obstacle1.addImage(obst1IMG);
    obstacle1.scale = 0.3;
	obstacle1.velocityX = -2;
	obstacle1.ligetime = 700;



  
	engine = Engine.create();
	world = engine.world;

	
    g = new Ground(400,630,1800,150);  



	Engine.run(engine);
  
}


function draw() {
	background(0)
	Engine.update(engine);
    g.display();	


	if(man1.isTouching(man2)){
		man1.velocityX = 0;
		textSize(30);
		fill("white");
		text("Time : 300", 1000,40);
		text("Score : 000000", 100,40);
		text("Coin x 00", 600,40);
	}

	if(keyWentDown(RIGHT_ARROW)){
		tappu.addImage(tappu1IMG);
		tappu.scale = 0.5;
		tappu.velocityX = 5;
	  }
  
	  if(keyWentUp(RIGHT_ARROW)){
		tappu.addImage(tappuIMG);
		tappu.scale = 0.4;
		tappu.velocityX = 0;
	  }

	  if(keyWentDown(LEFT_ARROW)){
		tappu.addImage(tappu3IMG);
		tappu.scale = 0.6;
		tappu.velocityX = -5;
	  }


	  if(keyWentUp(LEFT_ARROW)){
		tappu.addImage(tappu2IMG);
         tappu.velocityX = 0;
		 tappu.scale = 0.4;

	  }

		

  drawSprites();
 
}



