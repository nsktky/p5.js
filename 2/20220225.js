let z = 0;
let size = 0;
let r,g,b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  r = random(100,255);
  g = random(100,255);
  b = random(100,255);
}

function draw() {
  if(frameCount % 60 == 0){
    translate(width / 2, height / 2);
    stroke(255)
    strokeWeight(1);
    fill(r, g, b, 20);
    size = 10 + z;
    rect(0, 0, size);
    z += 10
  }
  if(frameCount % 600 == 0){
    r = random(100,255);
    g = random(100,255);
    b = random(100,255);
    stroke(r,g,b)
    strokeWeight(2);
    fill(r, g, b, 50);
    rect(0, 0, size);
  }
}