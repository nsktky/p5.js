let points = [];
let mult = 0.001;
let mult2 = 600;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 45, 89);
  noiseDetail(4);
  // angleMode(DEGREES);

  let tileCount = 10;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  let col1 = color(26, 166, 146, 5);
  let col2 = color(155, 108, 172, 5);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    if (frameCount % 2 > 0){
      stroke(col1);
    } else {
      stroke(col2);
    }

    line(mouseX, mouseY, points[i].x, points[i].y);
  }
}

function mousePressed() {
  clear();
  background(0, 45, 89);
}