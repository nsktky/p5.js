let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES)
  radius = width * 0.02
  stroke(200, 10, 250, 100)
  // strokeWeight(width*0.01);
}

function draw() {
  background(0, 10)
  let offset = width / 10
  for(let x = 0; x < width + offset; x += offset) {
    for(let y = 0; y < height + offset; y += offset) {
      shape(x, y)
    }
  }
}

function shape(positionX, positionY) {
  beginShape()
  fill(200, 200, 240)
  for(let i = 0; i < 360; i++) {
    let xoff = map(sin(i), -1, 1, 0, 1)
    let yoff = map(cos(i), -1, 1, 0, 2)
    let angle = map(noise(xoff, yoff, frameCount*0.005), 0, 1, 0, 720)
    let s = map(noise(xoff, frameCount*0.005), 0, 1, 50, 100)
    let b = map(noise(yoff, frameCount*0.005), 0, 1, 50, 100)
    x = radius * (sin(angle) + cos(i)) + positionX
    y = radius * (cos(angle) - sin(i)) + positionY
    vertex(x, y)
  }
  endShape(CLOSE)
}