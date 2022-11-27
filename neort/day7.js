let noiseStep = 0.0001;
let timeStep = 0.0003;
let angleStep = 0.001;
let angleStep2 = 600;
let points = [];
let grid;

function setup() {
  createCanvas(11012, 1080);
  pixelDensity(1);
  grid = width /100

  background(0);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);

  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let pointAngle = map(
      noise(points[i].x * angleStep, points[i].y * angleStep),
      0,
      1,
      0,
      angleStep2
    );
    points[i].add(createVector(sin(pointAngle), cos(pointAngle)));
    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = width;
    if (points[i].y < 0) points[i].y = height;
    if (points[i].y > height) points[i].y = random(height);

    let colorAngle = map(
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
    let h = map(sin(colorAngle), -1, 1, 10, 360);
    let s = map(cos(colorAngle), -1, 1, 10, 100);
    let b = map(tan(colorAngle), -1, 1, 10, 100);
    let r = map(sin(colorAngle), -1, 1, grid * 0.1, grid * 1);
    fill(h, s, b, 10);
    ellipse(points[i].x, points[i].y, r, r);
  }
}

