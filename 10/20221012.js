let points = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  // noFill()

  grid = width / 100;
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
      noise(points[i].x * 0.01, points[i].y * 0.01, frameCount * 0.001),
      0,
      1,
      0,
      20
    );
    push();
    rotate(angle);
    translate(points[i].x, points[i].y);
    fill(map(angle, 0, 20, 0, 255));
    rect(0, 0, grid);
    pop();
  }
}
