const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload() {
polygon_img = loadimage("polygon.png")    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();
    stand1 = new Stand(390,200,250,10);
    stand2 = new Stand(700,200,200,10 );

    //level one
    block1=new Block(300,275,30,40);
    console.log(block1)
    block2=new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5=new Block(320,275,30,40);
    block6=new Block(450,275,30,40);
    block7=new Block( 480,275,30,40);

    // level two 
    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11=new Block(420,235,30,40);
    block12=new Block(450,235,30,40);

    // level three 
    block13=new Block(360,195,30,40);
    block14=new Block(390,195,30,40);
    block15=new Block(420,195,30,40);

    // on top 
    block16=new Block(390,155,30,40);

    // set for second stand 
    // level one 
    block1 = new Block(640,175,30,40);
    block2 = new Block(670,175,30,40);
    block3 = new Block(700,175,30,40);
    block4 = new Block(730,175,30,40);
    block5 = new Block(760,175,30,40);

    // level two 
    block6 = new Block(670,135,30,40);
    block7 = new Block(7000,135,30,40);
    block8 = new Block(760,135,30,40);

    // on top 
    block9 = new Block(700,93.30,40);

    //ball holder with slings
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    
    slingshot = new Slingshot(this.ball,{x:100,y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
  textSize(20);
  fill ("lightyellow");
  text("drag the hexagonal stone and release it launch towards the stone  ",100,30 );

  ground.display();
  stand1.display();
  stand2.display();
  strokeweight(2);
  stroke(1000);
  fill("skyblue")
  block1.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill ("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();


}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
