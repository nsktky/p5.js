let x, y, radius;
let a, b;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(200);
  stroke(25)
  noFill()
  angleMode(DEGREES)
  radius = width * 0.2
  a = 1
  b = 0.01
}

function draw() {
  background(200, 10)
  translate(width/2, height/2);

  beginShape()
  for(let i = 0; i < 360; i++) {
    x = radius * (sin(i * frameCount * b) - cos(i * frameCount * b))
    y = radius * (cos(i * frameCount * b) - sin(i * frameCount * a))
    vertex(x, y)
  }
  endShape(CLOSE)

}