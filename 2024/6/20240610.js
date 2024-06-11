let radius, offset
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background(0)
  radius = 400
  offset = 0.5
  rectMode(CENTER)
  // noStroke()
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  translate(width / 2, height / 2)
  for(let i = 0; i < 360; i += offset) {
    let x = sin(i + frameCount*0.2)
    let y = cos(i + frameCount*0.05)
    let h = map(noise(x, y), 0, 1, 0, radius)
    rotate(offset)
    fill(h, 100, 100, 10)
    rect(radius, 0, h, 10)
  }
}
