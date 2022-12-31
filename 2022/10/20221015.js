let points = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(25);
  rectMode(CENTER);
  angleMode(DEGREES);

  grid = width / 10;

  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  background(0);
  rotateX(70);
  rotateZ(120);
  rotateY(100);
  translate(-width / 2, -height / 2);
  for (let i = 0; i < points.length; i++) {
    let angle = map(
      noise(points[i].x * 0.1, points[i].y * 0.1, frameCount * 0.001),
      0,
      1,
      0,
      360
    );
    z = sin(angle * 0.05) * height;
    fill(255, 50);
    stroke(255);
    push();
    translate(points[i].x, points[i].y, 0);
    box(grid, grid, z);
    pop();
  }
}
