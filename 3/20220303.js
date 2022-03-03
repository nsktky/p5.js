let line_speed;
let radius_speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  background(255);
  strokeWeight(2);
  stroke(0, 25);

  line_speed = random(0.001, 0.05);
  radius_speed = random(0.0001, 0.005);
}

function draw() {
  push();
  translate(width / 2, height / 2);

  let circleResolution = int(map(cos(frameCount * line_speed), -1, 1, 6, 30));
  let radius = int(map(sin(frameCount * radius_speed), -1, 1, 10, width / 2));
  let angle = TAU / circleResolution;

  beginShape();
  for (let i = 0; i <= circleResolution; i++){
    let x = cos(angle * i) * radius;
    let y = sin(angle * i) * radius;
    vertex(x, y);
  }
  endShape();
  pop();
}