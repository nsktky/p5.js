let seed;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(230);
  rectMode(CENTER);
  seed = random(31415926535);
}

function draw() {
  randomSeed(seed);
  background(20);
  translate(-width / 2, 0, 0);
  rotateX(100);
  fill(20, 100);
  stroke(255);
  push();
  for (let i = 1; i < 100; i++) {
    translate(30, 0, 0);
    box(random(100), frameCount/random(5), random(1000));
  }
  pop();
}
