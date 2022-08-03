function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  noStroke();

}

function draw() {
  for (let i = 0; i < 2; i++) {
    fill(random(150, 255))
    circle(random(width), random(height), random(3))
  }

  fill(100, random(200), 100);
  rect(sin(frameCount*0.01)*width, cos(frameCount*0.01)*height, 100);
}