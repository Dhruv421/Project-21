var canvas;
var music;
var surface1, surface2, surface3,surface4;
var Object0;
var Edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);
    surface1 = createSprite(120,550,100,10);
    surface1.shapeColor = "red";

    surface2 = createSprite(360,550,100,10);
    surface2.shapeColor = "green";

    surface3 = createSprite(240,550,100,10);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(480,550,100,10);
    surface4.shapeColor = "purple";

    Object0 = createSprite(random(20,550),300,10,10);
    Object0.velocityY = 2;
    Object0.velocityX = 1;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

if(surface1.isTouching(Object0) && Object0.bounceOff(surface1)){
    Object0.shapeColor = "red";
}

if(surface2.isTouching(Object0) && Object0.bounceOff(surface2)){
    Object0.shapeColor = "green";
}

if(surface3.isTouching(Object0) && Object0.bounceOff(surface3)){
    Object0.shapeColor = "yellow";
}

if(surface4.isTouching(Object0) && Object0.bounceOff(surface4)){
    Object0.shapeColor = "purple";
}

Edges = createEdgeSprites();

Object0.bounceOff(Edges);

drawSprites();


    //add condition to check if box touching surface and make it box
}
