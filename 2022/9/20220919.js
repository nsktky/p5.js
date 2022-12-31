function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 88, 66);
  angleMode(DEGREES);
  rectMode(CENTER);
  // noStroke();
}

function draw() {
  for (let y = 0; y < height; y++) {
    fill(y, y / 2, y / 3);
    stroke(y / 2, y / 3, y / 4);
    circle(
      sin(y + frameCount) * width,
      y + random(10),
      map(cos(frameCount), -1, 1, 0, width * 0.01)
    );
  }
}
