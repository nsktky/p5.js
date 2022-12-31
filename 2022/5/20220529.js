let points = [];
let mult = 0.001;
let mult2 = 600;
let col, bgcol, timer, flag, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 35, 61);
  noiseDetail(4);
  noStroke();
  angleMode(DEGREES);

  let tileCount = 40;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  col = color(223, 116, 3, 50);
  bgcol = color(209, 192, 221);
  0, 55, 126

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
      circle(points[i].x, points[i].y, 1);
      fill(bgcol);
      circle(points[i].x+random(50), points[i].y+random(50), random(1));
    }

    if (d < radius) {
      fill(217, 175, 130, 50);
      circle(points[i].x, points[i].y, 1);
      fill(0, 55, 126);
      circle(points[i].x+random(50), points[i].y+random(50), random(1));
    }
  }

  radius += 1;

}