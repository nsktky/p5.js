let radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(60, 30, 60);
  radius = 10;
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(0);
  for (let y = 0; y < height; y += radius) {
    for (let x = 0; x < width; x += radius) {
      let a = map(
        noise(x * cos(frameCount * 0.0001), y * sin(frameCount * 0.0001)),
        0,
        1,
        0,
        255
      );
      fill(255, a);
      circle(x, y, radius);
    }
  }
}
