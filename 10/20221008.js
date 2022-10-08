let points = [];
let grid;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
  // noStroke();
  grid = width / 100;
  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  background(0, 38, 16);
  for (let i = 0; i < points.length; i++) {
    push();
    let angle = map(
      noise(points[i].x * 0.001, points[i].y * 0.001, frameCount * 0.001),
      0,
      1,
      0,
      200
    );
    translate(points[i].x, points[i].y);
    rotate(angle);
    stroke(152, 206, 151, 30);
    line(0, 0, points[i].x, points[i].y);
    pop();
  }
}
