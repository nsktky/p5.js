function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  rectMode(CENTER);
}

function draw() {
  translate(0,
    map(sin(frameCount * 0.01), -1, 1, -width * 0.2, width * 0.2),
    0
  );
  fill(255);
  box(width * 0.8, width * 0.05, 10);
  push();
  translate(
    cos(frameCount * 0.08) * width * 0.2,
    sin(frameCount * 0.01) * width * 0.01,
    0
  );
  fill(0);
  box(width * 0.1, width * 0.08, 10);
  pop();
}
