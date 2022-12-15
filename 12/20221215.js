let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  radius = min(width, height) * 0.3;
  stroke(230, 160, 20);
  strokeWeight(4)
  noFill();
  x = 0;
  y = 0;
}

function draw() {
  background(0, 1)
  translate(width / 2, height / 2);

  beginShape();
  for(let i = 0; i < 360; i++) {
    fill(20, 50, 180, 10)
    let xoff = map(sin(i), -1, 1, 0, 1);
    let yoff = map(sin(i), -1, 1, 0, 1);
    let angle = map(noise(xoff, yoff, frameCount * 0.001), 0, 1, 0, 360)
    x = radius * cos(i * sin(angle))
    y = radius * sin(i - frameCount * 0.1)
    vertex(x, y)
  }
  endShape(CLOSE)

}
