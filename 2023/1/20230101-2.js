let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  radius = min(width, height) * 0.003
  stroke(250, 190, 20)
}

function draw() {
  translate(width/2, height/2);
  for(let i = 0; i < 100; i++) {
    let xoff = map(cos(i), -1, 1, 0, 360)
    let yoff = map(sin(i), -1, 1, 0, 360)
    x = radius * i * cos(xoff - frameCount)
    y = radius * i * sin(yoff + frameCount)
    fill(xoff, i, yoff)
    circle(x, y, radius*50)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}