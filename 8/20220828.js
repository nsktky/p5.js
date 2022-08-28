let angles = [];
let radius, tileCount;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();

  radius = 20;
  tileCount = int((width / radius) * 2);
  for (let i = 0; i < tileCount + 1; i++) {
    angles[i] = map(i, 0, tileCount + 1, 0, 360 * 2);
  }
}

function draw() {
  background(100);
  for (let i = 0; i < angles.length; i++) {
    push();
    stroke(map(i,0,angles.length,0,255))
    let x = map(i, 0, tileCount + 1, 0, width);
    let y = map(sin(angles[i]), -1, 1, height * 0.1, height * 0.9);
    translate(x, y)
    rotate(frameCount)
    rect(0, 0, radius);
    angles[i] += 0.1;
    pop();
  }
}
