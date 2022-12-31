let points = [];
let mult = 0.001;
let mult2 = 6000;
let col1, col2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 29, 66);
  noStroke();
  noiseDetail(1);
  // angleMode(DEGREES);

  let tileCount = 100;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  col1 = color(215, 0, 58, 10);
  col2 = color(245, 0, 68, 100);
}

function draw() {

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

      fill(col2);
      ellipse(points[i].x, points[i].y, 2);
      fill(col1)
      rect(points[i].x, points[i].y, 4);
  }
}