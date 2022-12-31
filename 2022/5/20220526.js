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

  let tileCount = 10;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  col = color(175, 214, 227);
  bgcol = color(0, 144, 169);

  timer = 300;
  flag = 0;
  radius = max(width, height) * 0.01;
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
      rect(points[i].x, points[i].y, 50);
      fill(bgcol);
      rect(points[i].x+random(50), points[i].y+random(50), random(50));
    }

    if (d < radius) {
      fill(68, 87, 165);
      rect(points[i].x, points[i].y, 50);
      fill(0, 77, 132);
      rect(points[i].x+random(50), points[i].y+random(50), random(50));
    }
  }

  radius += 1;
}