let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255)
  noFill()
  angleMode(DEGREES)
  colorMode(HSB, 360, 100, 100)
  radius = width * 0.2
}

function draw() {
  translate(width/2, height/2);
  // rotate(random(100))

  beginShape()
  for(let i = 0; i < 360; i++) {
    x = radius * sin(i + frameCount * 0.01)
    y = radius * cos(i * frameCount * 0.001) 
    vertex(x, y)
  }
  endShape(CLOSE)

}