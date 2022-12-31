let points = [];
let mult = 0.0001;
let mult2 = 60;
let col, radius, counter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  noiseDetail(4);
  noStroke();
  // angleMode(DEGREES);

  let tileCount = 5;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  col = color(200);
  radius = max(width, height) * 0.05;
  counter = 1;
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    fill(col);
    circle(points[i].x, points[i].y, radius);
    fill(0);
    circle(points[i].x, points[i].y, radius*0.8);
  }

  radius += map(noise(counter), 0, 1, -10, 10);
  if(radius < 0) radius = random(10);

  counter += 1;
}