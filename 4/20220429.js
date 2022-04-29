let points = [];
let mult = 1000;
let mult2 = 1000;
let mult3;
let red, green, blue;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230, 230, 220);
  noiseDetail(4);
  angleMode(DEGREES);
  noStroke();

  let tileCount = 50;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  mult3 = 1000000;
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, mult3, mult2);
    points[i].add(createVector(cos(angle), sin(angle)));

    if (points[i].x > width * 0.2) points[i].x = random(width);
    if (points[i].x < width * 0.1) points[i].x = random(width);
    if (points[i].y < height * 0.1) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    red = map(noise(sin(angle)), 0, 1, 0, 255);
    green = map(noise(cos(angle)), 0, 1, 0, 255);
    blue = map(noise(sin(i)), 0, 1, 0, 255);

    fill(0);
    rect(points[i].x, points[i].y, 1);
  }
}