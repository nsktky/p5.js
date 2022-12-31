let points = [];
let mult = 0.01;
let mult2 = 200;
let mult3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(92, 63, 42);
  noiseDetail(1);
  angleMode(DEGREES);
  noStroke();

  let tileCount = 10;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  mult3 = random(1000);
}

function draw() {
  translate(width * 0.5, height * 0.5);
  let col = color(254, 228, 167, 1);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, mult3, mult2);
    points[i].add(createVector(cos(angle), sin(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    rotate(angle+random(5));
    fill(col);
    rect(points[i].x, points[i].y, 200);
  }
}