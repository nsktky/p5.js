let noiseStep = 0.001;
let timeStep = 0.003;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  angleMode(DEGREES);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(20);
  grid = width / 100;
  for (let y = 0; y < height + grid; y += grid) {
    for (let x = 0; x < width + grid; x += grid) {
      let angle =
        noise(x * noiseStep, y * noiseStep, frameCount * timeStep) * 360;
      let h = map(cos(angle), -1, 1, 0, 360);
      let s = map(sin(angle), -1, 1, 0, 100);
      let b = map(cos(angle) * sin(angle), -1, 1, 50, 100);
      fill(h, s, b, 100);
      rect(x, y, grid);
    }
  }
}
