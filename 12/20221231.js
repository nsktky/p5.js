let x, y, radiue;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(200, 200, 230);
  angleMode(DEGREES);
  radius = min(width, height) * 0.001
  noFill()
  stroke(255)
}

function draw() {
  translate(width/2, height/2);
  beginShape()
  for(let i = 0; i < 360; i++) {
    let xoff = map(sin(i), -1, 1, 0, 0.3)
    let yoff = map(cos(i), -1, 1, 0, 0.3)
    let angle = map(noise(xoff, yoff, frameCount*0.004), 0,1,0,720)
    x = radius * i * sin(i + angle)
    y = radius * i * cos(i + angle)
    vertex(x, y)
  }
  endShape(CLOSE)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(200, 200, 230);
}