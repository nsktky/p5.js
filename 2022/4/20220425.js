let points = [];
let mult = 0.01;
let mult2 = 600;
let mult3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 88, 66);
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

  mult3 = random(220);
}

function draw() {
  translate(width * 0.5, height);
  let col = color(202, 255, 201, 2);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, mult3, mult2);
    points[i].add(createVector(cos(angle), sin(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    rotate(angle*0.1);
    fill(col);
    ellipse(points[i].x, points[i].y, 100, 80);
  }
}