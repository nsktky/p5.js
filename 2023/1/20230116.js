let x, y, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // angleMode(DEGREES);
  radius = min(width, height) * 0.4
  blendMode(DIFFERENCE)
  noStroke()
}

function draw() {
  background(0)
  fill(255)
  circle(width / 2, height / 2, radius*2)
  translate(width / 2, height / 2);
  beginShape();
  for(let i = 0; i < 36; i++) {
    x = radius * sin(i * frameCount*0.01);
    y = radius * cos(i * frameCount*0.01);
    let c = map(noise(x*0.1, y*0.1, frameCount), 0, 1, 100, 600);
    fill(c, c*0.8, c*1.2);
    vertex(x, y);
    vertex(-x, y);
    vertex(-x, -y);
    // vertex(x, -y);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}