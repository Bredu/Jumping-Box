var canvas;
var music;
var blue, pink, green, orange, ball;
var bb, pb, gb, ob;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(675,600);
    blue = createSprite(80,550,150,25);
    blue.shapeColor = "blue";
    blue.debug = true;

    green = createSprite(250,550,150,25);
    green.shapeColor = "green";
    green.debug = true;

    pink = createSprite(420,550,150,25);
    pink.shapeColor = "pink";
    pink.debug = true;

    orange = createSprite(590,550,150,25);
    orange.shapeColor = "orange";
    orange.debug = true;

    ball = createSprite(300,300,30,30);
    ball.shapeColor = "black";
    ball.debug = true;
    ball.velocityX = 5
    ball.velocityY = 5

    bb = createSprite(80,549,150,25);
    bb.visible = false;

    gb = createSprite(250,549,150,25);
    gb.visible = false;

    pb = createSprite(420,549,150,25);
    pb.visible = false;

    ob = createSprite(590,549,150,25);
    ob.visible = false;

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(orange);
    ball.bounceOff(pink);
    ball.bounceOff(green);
    ball.bounceOff(blue);

if(ball.x-ob.x<ball.width/2+ob.width/2 && ball.y-ob.y<ball.height/2+ob.height/2 && ob.x-ball.x<ball.width/2+ob.width/2 && ob.y-ball.y<ball.height/2+ob.height/2){
    ball.shapeColor = "orange";
}

if(ball.x-gb.x<ball.width/2+gb.width/2 && ball.y-gb.y<ball.height/2+gb.height/2 && gb.x-ball.x<ball.width/2+gb.width/2 && gb.y-ball.y<ball.height/2+gb.height/2){
    ball.shapeColor = "green";
}

if(ball.x-bb.x<ball.width/2+bb.width/2 && ball.y-bb.y<ball.height/2+bb.height/2 && bb.x-ball.x<ball.width/2+bb.width/2 && bb.y-ball.y<ball.height/2+bb.height/2){
    ball.shapeColor = "blue";
}

if(ball.x-pb.x<ball.width/2+pb.width/2 && ball.y-pb.y<ball.height/2+pb.height/2 && pb.x-ball.x<ball.width/2+gb.width/2 && pb.y-ball.y<ball.height/2+pb.height/2){
    ball.shapeColor = "pink";
}








drawSprites();

    //add condition to check if box touching surface and make it box
}
