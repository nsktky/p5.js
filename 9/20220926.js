let noiseStep = 0.001;
let timeStep = 0.005;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  seed = random(1000000000000);
}

function draw() {
  randomSeed(seed);
  grid = 20;
  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let angle = map(
        noise(x * noiseStep, y * noiseStep, frameCount * timeStep), 0, 1, 0, 360);
      let h = map(sin(angle), -1, 1, 10, 360);
      let s = map(sin(angle), -1, 1, 10, 720);
      fill(h, s, 40, 100);
      circle(x, y, grid);
      stroke(h, 100, 50, 100);
      fill(h, 100, 100, 100);
      arc(x, y, grid * 0.8, grid * 0.8, random(360), frameCount, PIE);
    }
  }
}