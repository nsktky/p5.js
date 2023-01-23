let points = [];
let size;
let sizeStep;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  stroke(255)
  angleMode(DEGREES);
  rectMode(CENTER);

  size = width * 0.01;
  sizeStep = width * 0.015;

  for(let j = 0; j < 4; j++) {
    for(let i = 0; i < 4; i++) {
      let x = random(width);
      let y = random(height);
      let p = createVector(x, y);
      points.push(p);
    }
  }
  noFill()
  // blendMode(DIFFERENCE);
}

function draw() {
  background(0)
  for(let i = 0; i < points.length; i++) {
    for(let j = 0; j < 30; j++) {
      rect(points[i].x + frameCount/i, points[i].y, size + (sizeStep*j));
    }
  }
  // sizeStep += tan(frameCount)*10
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}