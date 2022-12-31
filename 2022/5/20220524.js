let points = [];
let mult = 0.001;
let mult2 = 600;
let col, bgcol, timer, flag, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noiseDetail(4);
  noStroke();
  angleMode(DEGREES);

  let tileCount = 60;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  col = color(250);
  bgcol = color(50);

  timer = 300;
  flag = 0;
  radius = max(width, height) * 0.3;
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    let d = dist(points[i].x, points[i].y, width * 0.5, height * 0.5);
    if (d > radius) {
      fill(col);
      circle(points[i].x, points[i].y, 5);
      fill(bgcol);
      ellipse(points[i].x+random(5), points[i].y+random(5), random(5));
    }

    if (d < radius) {
      fill(50);
      circle(points[i].x, points[i].y, 5);
      fill(250);
      ellipse(points[i].x+random(5), points[i].y+random(5), random(5));
    }
  }
}