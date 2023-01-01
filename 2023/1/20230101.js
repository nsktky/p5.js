let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255, 100, 130);
  angleMode(DEGREES);
  radius = min(width, height) * 0.01
  stroke(250, 190, 20)
}

function draw() {
  // background(255, 100, 130);
  translate(width/2, 0);
  beginShape()
  for(let i = 0; i < 360; i++) {
    let xoff = map(sin(i), -1, 1, 0, 0.01)
    let yoff = map(cos(i), -1, 1, 0, 1)
    let angle = map(noise(xoff, yoff, frameCount*0.0001), 0,1,0,30)
    x = radius * i * sin(i * angle)
    y = radius * i * cos(i / angle)
    vertex(x, y)
  }
  endShape(CLOSE)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}