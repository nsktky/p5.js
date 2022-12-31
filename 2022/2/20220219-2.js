let img_human;
let img_obake;

function preload() {
  img_human = loadImage("human.png");
  img_obake = loadImage("obake.png");
  frameRate(10);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 220, 220);
}

function draw() {
  tint(255, map(sin(frameCount*0.1), -1, 1, 0, 255));
  image(img_human, random(-width/4,width), random(-height/4,height), random(width), random(height));
  tint(255, map(cos(frameCount*0.1), -1, 1, 0, 255))
  image(img_obake, random(-width/4,width), random(-height/4,height), random(width), random(height));
}