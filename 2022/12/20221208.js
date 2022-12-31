let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255)
  noFill()
  angleMode(DEGREES)
  colorMode(HSB, 360, 100, 100)
  radius = width * 0.6
}

function draw() {
  translate(width/2, height/2);
  rotate(random(100))

  beginShape()
  for(let i = 0; i < 360; i++) {
    let xoff = map(sin(i), -1, 1, 0, 10)
    let yoff = map(cos(i), -1, 1, 0, 10)
    let angle = map(noise(xoff, yoff, frameCount*0.1), 0, 1, 0, 360)
    x = radius * sin(angle) / frameCount * 50
    y = radius * cos(angle) / frameCount * 50
    vertex(x, y)
  }
  endShape(CLOSE)

}