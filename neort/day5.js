function setup() {
  createCanvas(11012, 1080);
  pixelDensity(1);
  noFill();
  stroke(255)
  background(0);
}

function draw() {
  circle(width / 2, height / 2, frameCount*50)
}