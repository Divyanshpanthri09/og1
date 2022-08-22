var backImg;
var santa, santaImg;
var gift, gifts, giftGroup;
var Divyansh, DivyanshImg1, DivyanshImg2;
var Aryansh, AryanshImg1, AryanshImg2;
var edges;


var canvas;
var g1, g2, g3, g4, g5;
var DivScore = 0;
var AryScore = 0;
var bgSound, hitSound;
var ground;


var M1, M2, M3;
var monster, monsterGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var screamSound;




function preload() {
  backImg = loadImage("BG1.jpg");
  santaImg = loadImage("santa.png");
 
  
  bgSound = loadSound("jinglebells.mp3");
  hitSound = loadSound("winSound.wav");
  screamSound = loadSound("screamSound.mp3");


  AryanshImg1 = loadImage("Ary1.png");
  AryanshImg2 = loadImage("Ary2.png");


  DivyanshImg1 = loadImage("Div1.png");
  DivyanshImg2 = loadImage("Div2.png");



  M1 = loadImage("M1.png");
  M2 = loadImage("M2.png");
  M3 = loadImage("M3.png");



}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // bgSound.play();


  santa = createSprite(200, 180, 40, 20);
  santa.addImage("santa", santaImg);
  santa.scale = 0.3;

  ground = createSprite(width / 2, height - 1, width, 2);


  Divyansh = createSprite(10, height - 100, 10, 10);
  Divyansh.addImage("Divyansh1", DivyanshImg1);
  Divyansh.addImage("Divyansh2", DivyanshImg2);
  Divyansh.scale = 0.5;


  Aryansh = createSprite(width - 100, height - 100, 10, 10);
  Aryansh.addImage("Aryansh1", AryanshImg1);
  Aryansh.addImage("Aryansh2", AryanshImg2);
  Aryansh.scale = 0.5;



  



 




}


function draw() {

  background(180);
  image(backImg, 0, 0, width, height);


  textSize(25);
  fill("yellow");
  text("Divyansh: " + DivScore, width / 2 - 250, 100);
  text("Aryansh: " + AryScore, width / 2 + 250, 100);




  
   

  drawSprites();
}



