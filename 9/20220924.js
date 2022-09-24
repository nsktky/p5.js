let noiseStep = 0.0005;
let timeStep = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  angleMode(DEGREES);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(20, 0, 0);
  grid = width / 100;
  for (let y = 0; y < height + grid; y += grid) {
    for (let x = 0; x < width + grid; x += grid) {
      let angle =
        noise(x * noiseStep, y * noiseStep, frameCount * timeStep) * 360;
      let arcAngle = map(cos(angle), -1, 1, 10, 720);
      fill(0, 0, 100);
      arc(x, y, grid, grid, y, arcAngle);
    }
  }
}
