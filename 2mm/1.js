function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25, 10, 40)
  noStroke();
  blendMode(DIFFERENCE)
}

function draw() {
  fill(random(100))
  circle(random(width), random(height), random(100))
}