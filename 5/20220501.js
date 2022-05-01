let points = [];
let mult = 10;
let mult2 = 1000;
let mult3;
let red, green, blue;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(70);
  noiseDetail(4);
  angleMode(DEGREES);

  let tileCount = 50;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
      stroke(255, 100);
      line(width* 0.5, height * 0.2, x, y);
    }
  }

  fill(10, 30, 70);
  rect(width * 0.39, height * 0.19, width * 0.22, height);

  noStroke();
  mult3 = 100;
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, mult3, mult2);
    points[i].add(createVector(cos(angle), sin(angle)));

    if (points[i].x > width * 0.6) points[i].x = random(width);
    if (points[i].x < width * 0.4) points[i].x = random(width);
    if (points[i].y < height * 0.2) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    red = map(noise(sin(angle)), 0, 1, 50, 255);
    green = map(noise(cos(angle)), 0, 1, 50, 255);
    blue = map(noise(sin(i)), 0, 1, 50, 255);

    fill(red, green, blue);
    ellipse(points[i].x, points[i].y, 2);
  }
}