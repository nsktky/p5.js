let points = [];
let mult = 0.1;
let mult2 = 100;
let col1, col2;
let radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 29, 66);
  col1 = color(126, 190, 171, 10);
  col2 = color(0, 170, 110, 100);
  radius = min(width, height) * 0.4;

  stroke(255, 100);
  for (let i = 0; i < 10000; i++) {
    point(random(width), random(height));
  }

  noStroke();
  fill(0, 29, 66)
  circle(width / 2, height / 2, radius * 2);
  noiseDetail(1);
  // angleMode(DEGREES);

  let tileCount = int(random(40, 100));
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  mult = random(0.1, 0.001);
  mult2 = random(100, 600);

  if (int(mult2) % 2 == 0) angleMode(DEGREES);
}

function draw() {

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    let d = dist(points[i].x, points[i].y, width / 2, height / 2);
    if (d < radius) {

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
}