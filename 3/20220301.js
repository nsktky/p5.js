let segmentCount = 0;
let radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  radius = max(width, height);
}

function draw() {
  segmentCount += 0.05
  colorMode(HSB, 360, 100, 100);
  background(200,30,100);

  let anglestep = 360 / segmentCount;

  beginShape(TRIANGLE_FAN);
  vertex(width*0.9, height * 0.1);

  for (let angle = 0; angle <= 370; angle += anglestep) {
    let vx = width / 2 + cos(angle) * radius;
    let vy = height / 2 + sin(angle) * radius;
    vertex(vx, vy);
    fill(angle, 50, 100);
    stroke(angle, 100, 80);
  }
  endShape();
}