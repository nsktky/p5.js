let points = [];
let mult = 0.1;
let mult2 = 1;
let col1, col2;
let radius, hole;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 29, 66);
  col1 = color(250, 191, 19, 10);
  col2 = color(217, 128, 50, 100);
  radius = min(width, height) * 0.3;
  hole = 1;

  stroke(255, 120);
  for (let i = 0; i < 10000; i++) {
    point(random(width), random(height));
  }

  noStroke();
  noiseDetail(4);
  angleMode(DEGREES);

  let tileCount = 30;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    let d = dist(points[i].x, points[i].y, width / 2, height / 2);
    if (d > radius) {

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = random(width);
      if (points[i].y < 0) points[i].y = random(height);
      if (points[i].y > height) points[i].y = random(height);

      fill(col2);
      ellipse(points[i].x, points[i].y, 2);
      fill(col1)
      rect(points[i].x, points[i].y, 8);
    }
  }

  fill(0, 29, 66, 10);
  circle(width / 2, height / 2, hole);

  if (hole < width * 2) hole += 1;
}