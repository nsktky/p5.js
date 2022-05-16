let points = [];
let mult = 0.001;
let mult2 = 600;
let col;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noiseDetail(4);
  noStroke();
  // angleMode(DEGREES);

  let tileCount = 1;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  col = color(255, 2);
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
    rect(points[i].x, points[i].y, random(width*0.2));
  }
}

function mousePressed() {
  clear();
  background(0);
}