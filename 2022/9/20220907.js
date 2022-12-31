let seed;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  rectMode(CENTER);
  seed = random(31415926535);
}

function draw() {
  randomSeed(seed);
  rotateX(frameCount*random(0.0001, 0.1))
  rotateZ(frameCount*random(0.0001, 0.1))
  fill(147,46,68)
  stroke(215,0,58)
  sphere(width/frameCount*20)

}
