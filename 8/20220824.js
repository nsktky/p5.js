let x, y, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  rectMode(CENTER);
  // noStroke();
  x = 0;
  y = 0;
  radius = width*0.2;
}

function draw() {
  translate(width/2, height/2)
  x = map(cos(frameCount),-1,1,-radius,radius);
  y = map(sin(frameCount),-1,1,-radius,radius);
  fill(255);
  noStroke();
  rect(x, y, random(50));

  stroke(25,100);
  fill(0, 1)
  circle(x, y,radius)
}