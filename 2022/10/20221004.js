let points = [];
let rectPoints = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  // angleMode(DEGREES);
  rectMode(CENTER);
  grid = width / 100;
  for (let y = 0; y < height + grid; y += grid) {
    for (let x = 0; x < width + grid; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  let rectNumber = int(random(1, 5));
  for (let i = 0; i < rectNumber; i++) {
    let x = random(width);
    let y = random(height);
    let p = createVector(x, y);
    rectPoints.push(p);
  }
}

function draw() {
  let ax = map(mouseX, 0, width, 0.0001, 0.001);
  let ay = map(mouseY, 0, width, 0.0001, 0.001);
  for (let i = 0; i < points.length; i++) {
    let angle = map(
      noise(points[i].x * ax, points[i].y * ay, frameCount * 0.0005),
      0,
      1,
      0,
      360
    );
    let c = map(tan(angle), -1, 1, 0, 100);
    fill(c, 1);
    rect(points[i].x, points[i].y, grid);
  }

  for (let i = 0; i < rectPoints.length; i++) {
    fill(0, 0, 0);
    rect(rectPoints[i].x + 10, rectPoints[i].y + 10, width * 0.05);
    fill(0, 0, 100);
    rect(rectPoints[i].x, rectPoints[i].y, width * 0.05);
  }
}
