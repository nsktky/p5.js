let points = [];
let grid, angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  angleMode(DEGREES);
  // noStroke();

  grid = width / 10;
  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  angle = 0;
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    push();
    translate(points[i].x, points[i].y);
    circle((sin(angle) * grid) / 2, (cos(angle) * grid) / 2, grid / 2);
    angle += 0.01;
    if (angle > 520) {
      clear();
      background(200);
      angle = random(360);
    }
    pop();
  }
}
