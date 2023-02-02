let x, y, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  angleMode(DEGREES);
  radius = min(width, height) * 0.3;
  x = random(360);
  y = random(360);
  blendMode(DIFFERENCE);
}

function draw() {
  translate(width * 0.5, height * 0.5);
  beginShape();
  for(let i = 0; i < 30; i++){
    let angle = map(noise(x, y, frameCount), 0, 1, 0, 360);
    let xoff = map(sin(angle), -1, 1, 0, 360);
    let yoff = map(cos(angle), -1, 1, 0, 360);
    x = radius * sin(xoff);
    y = radius * cos(yoff);
    fill(angle, yoff, yoff);
    stroke(angle * 0.5, xoff * 0.5, yoff * 0.5);
    vertex(x, -y);
    endShape(CLOSE);
  }
}
