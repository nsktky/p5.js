let points = [];
let mult = 0.01;
let mult2 = 600;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 72, 56);
  noStroke();
  noiseDetail(1);
  // angleMode(DEGREES);

  let tileCount = 50;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  let col1 = color(251, 216, 181, 100);
  let col2 = color(240, 131, 0, 10);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    fill(col1);
    ellipse(points[i].x, points[i].y, 10);
    fill(col2);
    rect(points[i].x, points[i].y, 20);
  }
}