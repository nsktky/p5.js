let x, y, radius;
let a, b;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255)
  noFill()
  angleMode(DEGREES)
  radius = width * 0.2
  a = random(0.001, 100)
  b = random(0.00001, 0.1)
}

function draw() {
  translate(width/2, height/2);
  // rotate(random(100))

  beginShape()
  for(let i = 0; i < 360; i++) {
    x = radius * sin(i - frameCount * a)
    y = radius * cos(i + frameCount * b) 
    // x = radius * sin(i * frameCount * b)
    // y = radius * cos(i * frameCount * b) 
    vertex(x, y)
  }
  endShape(CLOSE)

}