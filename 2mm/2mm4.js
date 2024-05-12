let x, y, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  angleMode(DEGREES);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100)
  radius = min(width, height) * 0.3;
  x = 0;
  y = 0;
  blendMode(DIFFERENCE);
  noStroke();
}

function draw() {
  drawImage(width / 2, height / 2, 1)
}

function drawImage(ox, oy, s) {
  push();
  translate(ox, oy);
  for(let i = 0; i < 300; i++){
    let angle = map(noise(x, y, frameCount), 0, 1, 0, 360);
    let xoff = map(sin(angle), -1, 1, 0, 360);
    let yoff = map(cos(angle), -1, 1, 0, 360);
    x = radius * sin(xoff);
    y = radius * cos(xoff);
    let move = map(cos(frameCount*0.1), -1, 1, 0, width*0.2) * s
    fill(angle, x, angle/yoff/xoff);
    rotate(angle);
    rect(x, y + move, angle*0.3, move);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(150);
}