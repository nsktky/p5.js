let col;
let x, y, a, b, t;
let moveX, moveY;
let stepSize = 5;
let lineLength = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 82, 67);
  col1 = color(104, 183, 161, 100);
  col2 = color(0, 137, 105, 100);
  col3 = color(0, 92, 76, 100);
  col4 = color(0, 164, 150, 100);
  col5 = color(0, 154, 163, 100);
  strokeWeight(2);

  x = width / 2;
  y = height / 2;
  a = random(1);
  b = random(1);
  t = 0;
  moveX = 10;
  moveY = 10;
}

function draw() {
  moveX += map(noise(a, t), 0.0, 1.0, -20, 20);
  moveY += map(noise(b, t), 0.0, 1.0, -20, 20);
  t += 0.01

  if (x > width) x = 0
  if (x < 0) x = width
  if (y < 0) y = height
  if (y > height) y = 0

  let d = dist(x, y, moveX, moveY);

  if (d > stepSize) {
    let angle = atan2(moveY - y, moveX - x);

    push();
    translate(x, y);
    rotate(angle);
    stroke(col1);
    if (frameCount % 2 == 0) stroke(col2);
    if (frameCount % 3 == 0) stroke(col3);
    if (frameCount % 4 == 0) stroke(col4);
    if (frameCount % 5 == 0) stroke(col5);

    line(0, 0, 0, lineLength * random(0.3, 0.6) * d / 15);
    pop();

    x = x + cos(angle) * stepSize;
    y = y + sin(angle) * stepSize;

  }
}