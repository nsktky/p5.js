let noiseStep = 0.005;
let timeStep = 0.01;
let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  image(capture, 0, 0, width, height);
  capture.loadPixels();

  grid = 10;
  for (let y = 0; y < capture.height + grid; y += grid) {
    for (let x = 0; x < capture.width + grid; x += grid) {
      let angle =
        noise(x * noiseStep, y * noiseStep, frameCount * timeStep) * 720;
      let offset = (y * capture.width + x) * 4;
      let r = capture.pixels[offset] + map(cos(angle), -1, 1, 0, 200);
      let g = capture.pixels[offset + 1] + map(sin(angle), -1, 1, 0, 100);
      let b = capture.pixels[offset + 2] + map(cos(angle * 0.1), -1, 1, 0, 100);
      fill(r, g, b);
      rect(x, y, grid);
    }
  }
}
