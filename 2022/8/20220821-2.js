let points = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  fill(100)
  stroke(random(200, 300), 50, 100)
  rect(width/2, height/2, width/frameCount*100, random(height*0.7))
}