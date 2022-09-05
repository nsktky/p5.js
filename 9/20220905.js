let radius, seed;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(20);
  rectMode(CENTER);
  noStroke();
  radius = width * 0.2;
  seed = random(10000000);
}

function draw() {
  background(20);
  randomSeed(seed);
  push();
  rotateX(frameCount*random(0.01, 0.1))
  rotateY(frameCount*random(0.01, 0.1))
  fill(20,60,100)
  stroke(255)
  circle(0, 0, radius)
  translate(0,0,1)
  fill(230,190,20)
  circle(0, 0, radius)
  pop();

}
