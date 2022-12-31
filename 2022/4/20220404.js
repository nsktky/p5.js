let col;
let x = 0;
let y = 0;
let stepSize = 5;
let lineLength = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(176, 178, 179);
  col1 = color(217, 198, 192);
  col2 = color(128, 56, 99);
  strokeWeight(2);
  x = mouseX;
  y = mouseY;
  cursor(CROSS);
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    let d = dist(x, y, mouseX, mouseY);

    if (d > stepSize) {
      let angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle);
      stroke(col1);
      if (frameCount % 2 == 0) stroke(col2);
      line(0, 0, 0, lineLength * random(0.95, 1) * d / 10);
      pop();

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;

    }
  }
}