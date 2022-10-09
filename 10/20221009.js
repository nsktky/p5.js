let points = [];
let grid;
let letter = "👀";
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
  // noStroke();
  grid = width / 20;
  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  textSize(grid * 0.5);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  for (let i = 0; i < points.length; i++) {
    let angle = map(
      noise(points[i].x * 0.001, points[i].y * 0.001, frameCount * 0.01),
      0,
      1,
      0,
      360
    );
    push();
    translate(points[i].x, points[i].y);
    rotate(angle);
    fill(points[i].x * 0.6, points[i].y * 0.6, angle * 0.7);
    ellipse(0, 0, grid * 1.2, grid);
    text(letter, 0, 0);
    pop();
  }
}
