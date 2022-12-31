let x, y, radiue;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(200, 200, 230);
  angleMode(DEGREES);
  radius = width * 0.001
  noFill()
  stroke(255)
}

function draw() {
  translate(width/2, height/2);
  beginShape()
  for(let i = 0; i < 360; i++) {
    x = radius * frameCount * 0.001 * i * sin(i + frameCount)
    y = radius * frameCount * 0.001 * i * cos(i + frameCount)
    vertex(x, y)
  }
  endShape(CLOSE)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(200, 200, 230);
}