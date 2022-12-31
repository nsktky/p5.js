let points = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
}

function draw() {
  fill(0)
  stroke(250, 190, 20)
  circle(width/2, height/2, width/frameCount*100)
  rect(random(width),random(height),random(50))

}