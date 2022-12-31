let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES)
  radius = width * 0.2
  stroke(200, 180, 250)
  noFill()
  fill(220, 210, 240, 10)
}

function draw() {
  background(0, 1)
  translate(width/2, height/2);
  // rotate(random(100))

  beginShape()
  for(let i = 0; i < 360; i++) {
    let xoff = map(sin(i), -1, 1, 0, 1)
    let yoff = map(cos(i), -1, 1, 0, 1)
    let angle = map(noise(xoff, yoff, frameCount*0.001), 0, 1, 0, 720)
    x = radius * (sin(angle) - cos(i))
    y = radius * (cos(angle) + sin(i))
    vertex(x, y)
  }
  endShape(CLOSE)

}