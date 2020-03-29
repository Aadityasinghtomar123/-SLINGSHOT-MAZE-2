const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1;
var platform;
var bird, slingShot;
function setup(){
    var canvas = createCanvas(1500,900);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1800,20);
    platform = new Ground(150, 450, 200, 20);
    platform2 = new Ground(1200,400,300,20);
    box1 = new Box(500,320,70,70);
    box2 = new Box(570,320,70,70);
    box3 = new Box(640,240,70,70);
    box4 = new Box(710,240,70,70);
    box5 = new Box(780,160,70,70);
    box6 = new Box(850,200,70,70);
    box7 = new Box(920,200,70,70);
    box8 = new Box(990,200,70,70);

    box9 = new Box(570,320,70,70);
    box10 = new Box(640,320,70,70);
    box11 = new Box(710,320,70,70);
    box12 = new Box(780,320,70,70);
    box13 = new Box(850,200,70,70);
    box14 = new Box(920,320,70,70);

    box15 = new Box(640,200,70,70);
    box16 = new Box(710,200,70,70);
    box17 = new Box(780,200,70,70);
    box18 = new Box(850,200,70,70);

    box19 = new Box(710,100,70,70);
    box20 = new Box(780,100,70,70);

    box21 = new Box(1100,50,70,70);
    box22 = new Box(1170,50,70,70);
    box23 = new Box(1240,50,70,70);
    box24 = new Box(1310,50,70,70);

    box25 = new Box(1170,50,70,70);
    box26 = new Box(1240,50,70,70);
    bird = new Bird(200,100);
    slingshot = new SlingShot(bird.body,{x:200, y:280});
}
function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    bird.display();
    platform.display();   
    platform2.display();
    slingshot.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}