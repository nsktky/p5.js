let x, y, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);
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
  translate(0, height * 0.8);
  drawImage(width, height / 4, -1)
  drawImage(0, height / 2, 1)
}

function drawImage(ox, oy, s) {
  push();
  translate(ox, oy);
  for(let i = 0; i < 300; i++){
    let angle = map(noise(x, y, frameCount), 0, 1, 0, 360);
    let xoff = map(sin(angle), -1, 1, 0, 360);
    let yoff = map(cos(angle), -1, 1, 0, 360);
    x = radius * sin(xoff);
    y = radius * tan(xoff);
    let move = map(sin(frameCount*3), -1, 1, 0, width) * s
    fill(angle, x, angle/yoff/xoff, 90);
    rect(x + move, y, angle*0.3, move)
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(180);
}