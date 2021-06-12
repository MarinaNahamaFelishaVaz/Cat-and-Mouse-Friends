var  parkI;
var cat,catM,catF, catI;
var mouse,mouseM,mouseF,mouseI;



function preload() {
    //load the images here
    parkI=loadImage("images/garden.png");
  catI = loadImage("images/cat1.png");
  catM = loadAnimation("images/cat2.png", "images/cat3.png");
  catF = loadImage("images/cat4.png");
  mouseI = loadImage("images/mouse4.png");
  mouseM = loadAnimation("images/mouse3.png", "images/mouse2.png");
  mouseF = loadImage("images/mouse1.png");
 
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
cat = createSprite(850, 450, 20, 20);
cat.addImage("catSitting", catI);
cat.scale = 0.2;

mouse = createSprite(100, 450, 20, 20);
mouse.addImage("mouseFinding", mouseI);
mouse.scale = 0.1;
}

function draw() {

    background(parkI);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x < (cat.width - mouse.width)/2){
cat.velocityX = 0;
cat.x =200;
cat.addAnimation("catFinalimage", catF);
cat.changeAnimation("catFinalimage");

mouse.addAnimation("mouseFinalImage", mouseF);
mouse.changeAnimation("mouseFinalImage");
}

    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
cat.velocityX = -5;
        cat.addAnimation("catMoving", catM);
    cat.changeAnimation("catMoving");
    cat.frameDelay = 18;
   
    
    mouse.addAnimation("mouseMoving", mouseM);
    mouse.frameDelay = 14;
    mouse.changeAnimation("mouseMoving");
    
    
}
}


