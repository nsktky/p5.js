let points = [];
let mult = 0.02;
let mult2 = 185;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
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
  let col1 = color(174, 37, 137, 100);
  let col2 = color(231, 66, 143, 10);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult * 0.1), 0, 1, 0, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = 0;
    if (points[i].x < 0) points[i].x = width;
    if (points[i].y < 0) points[i].y = height;
    if (points[i].y > height) points[i].y = 0;

    fill(col1);
    ellipse(points[i].x, points[i].y, 2);
    fill(col2);
    ellipse(points[i].x, points[i].y, 10);
  }
}