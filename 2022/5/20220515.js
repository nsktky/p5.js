let points = [];
let mult = 0.01;
let mult2 = 600;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noiseDetail(4);
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
  let col1 = color(200, 50);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    fill(col1);
    let xd = dist(points[i].x, 0, mouseX, 0);
    let yd = dist(0, points[i].y, 0, mouseY);

    if (xd > width) xd = random(width);
    if (xd < 0) xd = random(width);
    if (yd < 0) yd = random(height);
    if (yd > height) yd = random(height);

    circle(xd, yd, 2);
  }
}

function mousePressed() {
  clear();
  background(0);
}