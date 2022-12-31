function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(255)
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  rotateX(frameCount*1)
  rotateY(frameCount*2)
  rotateZ(frameCount*4)
  translate(0,frameCount*0.01,0)
  fill(0)
  circle(width*0.2,0,20)
}
