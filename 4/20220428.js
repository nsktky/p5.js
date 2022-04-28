let points = [];
let mult = 0.01;
let mult2 = 200;
let mult3;
let red, green, blue;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230, 230, 220);
  noiseDetail(1);
  angleMode(DEGREES);
  noStroke();

  let tileCount = 20;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  mult3 = 10;
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, mult3, mult2);
    points[i].add(createVector(cos(angle), sin(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    red = map(noise(sin(angle)), 0, 1, 0, 255);
    green = map(noise(cos(angle)), 0, 1, 0, 255);
    blue = map(noise(sin(i)), 0, 1, 0, 255);

    fill(red, green, blue);
    ellipse(points[i].x, points[i].y, 30);
  }
}