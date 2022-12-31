let points = [];
let mult = 0.001;
let mult2 = 300;
let col, radius, timer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  noiseDetail(4);
  noStroke();
  // angleMode(DEGREES);

  let tileCount = 2;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  col = color(10);
  radius = max(width, height) * 0.05;
  timer = 600;
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
  }

  radius += cos(frameCount * 0.1);

  if(frameCount % timer == 0) {
    clear();
    background(250);
  }
}