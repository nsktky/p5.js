let points = [];
let mult = 0.0001;
let mult2 = 60;
let col1, col2, bgcol, radius, counter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  col1 = color(248, 184, 86);
  col2 = color(0, 154, 163);
  bgcol = color(0, 82, 67);
  radius = max(width, height) * 0.05;
  counter = 1;

  background(bgcol);
  noiseDetail(4);
  noStroke();
  rectMode(CENTER);
  // angleMode(DEGREES);

  let tileCount = 5;
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

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    fill(col1);
    circle(points[i].x, points[i].y, radius);
    fill(col2);
    circle(points[i].x, points[i].y, radius*0.8);
  }

  radius += map(noise(counter), 0, 1, -10, 10);
  if(radius < 0) radius = random(10);
  if(radius > max(width, height)) radius = random(10);

  counter += 0.001;
}