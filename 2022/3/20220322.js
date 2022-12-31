let formResolution = 1000;
let stepSize = 0.5;
let distortionFactor = 1;
let initRadius = 300;
let centerX;
let centerY;
let x = [];
let y = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  centerX = width / 2;
  centerY = height / 2;
  moveX = width / 2;
  moveY = height / 2;
  let angle = radians(360 / formResolution);
  for (let i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
  }

  stroke(128, 164, 146);
  fill(128, 164, 146);
}

function draw() {
  background(220, 237, 240);

  for (let i = 0; i < formResolution; i++) {
    x[i] += random(-stepSize, stepSize) * frameCount * 0.001;
    y[i] += random(-stepSize, stepSize) * frameCount * 0.001;
  }

  beginShape();
  vertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);
  for (let i = 0; i < formResolution; i++) {
    vertex(x[i] + centerX, y[i] + centerY);
  }
  endShape();
}