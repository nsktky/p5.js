let noiseStep = 0.000001;
let timeStep = 0.00005;
let points = [];
let grid = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  noStroke();

  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(
      noise(
        points[i].x * noiseStep,
        points[i].y * noiseStep,
        frameCount * timeStep
      ),
      0,
      1,
      0,
      360
    );
    let h = map(sin(angle), -1, 1, 0, 360);
    let s = map(cos(angle), -1, 1, 0, 100);
    let b = map(tan(angle), -1, 1, 0, 100);
    let r = map(sin(angle), -1, 1, grid * 0.1, grid * 5);
    fill(h, s, 100, 1);
    stroke(s, b, h, 100);
    ellipse(points[i].x, points[i].y, r, r);
  }
}
