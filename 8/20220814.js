function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  // noStroke();
}

function draw() {
  fill(0);
  stroke(250, 190, 20);
  rotate(-1*frameCount)
  circle(width/2, height/2, width/frameCount*100)
}