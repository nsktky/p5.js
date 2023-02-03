let x, y, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
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
  push()
  // translate(width/2, height/2);
  // rotate(frameCount)
  drawImage(width, height / 2, -1)
  drawImage(0, height / 2, 1)
  pop()
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
    fill(angle, yoff, angle/yoff/xoff);
    let move = map(sin(frameCount*0.2), -1, 1, 0, width) * s
    rect(x + move, y, radius*0.5)
  }
  pop();
}