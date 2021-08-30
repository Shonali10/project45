var suzie;
var bubble, bubbleimg;
var spray, sprayimg;
var ant1, ant2, ant3, antimg;
var cake, cakeimg;
var wall1, wall2, wall3, wall4, wall5, wall6;
var bg;


function preload(){
suzie_front = loadImage("images/suzie_front.png");
suzie_back = loadImage("images/suzie_back.png");
suzie_left = loadImage("images/suzie_left.png");
suzie_right = loadImage("images/suzie_right.png");

bubbleimg = loadImage("images/bubble.png");
sprayimg = loadImage("images/spray.png");
antimg = loadImage("images/ant.png");
cakeimg =loadImage("images/cake.png");
}

function setup(){
createCanvas(1366,625);

wall1 = createSprite(150, 300, 20, 200);
wall2 = createSprite(1216, 300, 20, 200);
wall3 = createSprite(230, 300, 150, 20);
wall4 = createSprite(1140, 300, 150, 20);
wall5 = createSprite(683, 100, 500, 20);
wall6 = createSprite(683, 525, 500, 20);

suzie = createSprite(1300,350,30,30);
suzie.addImage("front", suzie_front);
suzie.addImage("back", suzie_back);
suzie.addImage("left", suzie_left);
suzie.addImage("right", suzie_right);
suzie.scale = 0.19

ant1 =createSprite(500,50,30,30);
ant1.addImage(antimg);
ant1.scale = 0.07;

ant2 =createSprite(300,300,30,30);
ant2.addImage(antimg);
ant2.scale = 0.07;

ant3 =createSprite(600,500,30,30);
ant3.addImage(antimg);
ant3.scale = 0.07;

cake = createSprite(683,312.5);
cake.addImage(cakeimg);
cake.scale = 0.31

bubble = createSprite(683,332.5);
bubble.addImage(bubbleimg);
bubble.scale = 0.06

spray = createSprite(200,200);
spray.addImage(sprayimg);
spray.scale = 0.25
}

function draw(){
background("white");
edges = createEdgeSprites();
suzie.collide(edges);

if(keyDown("left")){
   suzie.changeImage("left", suzie_left)
   suzie.x=suzie.x-2;

}
if(keyDown("right")){
   suzie.changeImage("right", suzie_right)
    suzie.x=suzie.x+2;
   }
if(keyDown("up")){
   suzie.changeImage("back", suzie_back)
   suzie.y=suzie.y-2;
   suzie.scale = suzie.scale - 0.0003
    }   
if(keyDown("down")){
   suzie.changeImage("front", suzie_front)
   suzie.y=suzie.y+2;
   suzie.scale = suzie.scale + 0.0003


   }
drawSprites();
}