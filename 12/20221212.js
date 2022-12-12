let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES)
  radius = width * 0.1
  stroke(200, 10, 250, 100)
  strokeWeight(width*0.01);
}

function draw() {
  background(0, 10)
  let offset = width / 7
  for(let x = 0; x < width + offset; x += offset) {
    shape(x, height / 2)
  }
}

function shape(positionX, positionY) {
  beginShape()
  fill(220, 210, 240)
  for(let i = 0; i < 360; i++) {
    let xoff = map(sin(i), -1, 1, 0, 0.3)
    let yoff = map(cos(i), -1, 1, 0, 0.3)
    let angle = map(noise(xoff, yoff, frameCount*0.005), 0, 1, 0, 360)
    x = radius * (sin(angle) + cos(i)) + positionX
    y = radius * (cos(angle) - sin(i)) + positionY
    vertex(x, y)
  }
  endShape(CLOSE)
}