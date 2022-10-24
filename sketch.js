
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var backgroundImage;
var humanStanding;
var tractorImg;

var tractor;
var ground;

function preload()
{

backgroundImage = loadImage("backgroundImg.jpg");
humanStanding = loadImage("malestanding.png");
tractorImg = loadImage("tractor1.png");

}

function setup() {
  createCanvas(1400,550);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700,548,1400,40);
  
  tractor = createSprite(300,395)
  tractor.addImage(tractorImg)
  tractor.scale = 0.75
  

  
 
}


function draw() 
{
  image(backgroundImage , 0 , 0 , width , height)
  Engine.update(engine);

  drawSprites();
  
  ground.show();
}

