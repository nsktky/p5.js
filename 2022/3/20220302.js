let segmentCount;
let radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  radius = max(width, height) / 3;
}

function draw() {
  segmentCount = int(map(cos(frameCount*0.1), -1, 1, 3, 100));
  colorMode(HSB, 360, width, height);
  background(0, 0, 0);

  let anglestep = 360 / segmentCount;

  beginShape(TRIANGLE_FAN);
  vertex(width*0.5, height * 0.5);

  for (let angle = 0; angle <= 370; angle += anglestep) {
    let vx = width / 2 + cos(angle) * radius;
    let vy = height / 2 + sin(angle) * radius;
    vertex(vx, vy);
    fill(angle, mouseX*0.6 + (width * 0.5), mouseY + (height * 0.5));
    stroke(angle, mouseX + (width * 0.5), mouseY + (height * 0.5));
  }
  endShape();
}