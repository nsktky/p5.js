let points = [];
let mult = 0.01;
let mult2 = 300;
let col1, col2;
let radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 0);
  col1 = color(231, 66, 143);
  col2 = color(0, 175, 132);
  col3 = color(91, 62, 149);
  radius = width * 0.2;

  stroke(255, 100);
  for (let i = 0; i < 10000; i++) {
    point(random(width), random(height));
  }
  noStroke();

  noiseDetail(4);
  // angleMode(DEGREES);

  let tileCount = 100;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  star(width*0.2 + frameCount, height*0.5, 1, col1);
  // star(width*0.5 + frameCount, height*0.5, 1, col2);
  // star(width*0.9 + frameCount, height*0.5, 1, col3);
}

function star(x, y, r, col) {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    let d = dist(points[i].x, points[i].y, x, y);
    if (d < radius * r) {

      // if (points[i].x > width) points[i].x = random(width);
      // if (points[i].x < 0) points[i].x = random(width);
      // if (points[i].y < 0) points[i].y = random(height);
      // if (points[i].y > height) points[i].y = random(height);

      stroke(col);
      fill(0, 29, 66);
      ellipse(points[i].x, points[i].y, 5);
    }
  }
}