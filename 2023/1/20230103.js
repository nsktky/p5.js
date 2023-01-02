let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES)
  radius = width * 0.001
  // noFill()

}

function draw() {
  // background(0)
  translate(width / 2, height / 2)
  fill(0)
  circle(0, 0, radius*300)
  beginShape()
  for(let i = 0; i < 360; i++) {
    let xoff = map(sin(i), -1, 1, 0, 100)
    let yoff = map(cos(i), -1, 1, 0, 100)
    let angle = map(noise(xoff, yoff, frameCount*1), 0, 1, 0, 720)
    x = radius * i * sin(angle)
    y = radius * i * cos(angle)
    vertex(x, y)
    stroke(255, 180, 200)
    fill(25,140, 200, 10)

  }
  endShape(CLOSE)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}