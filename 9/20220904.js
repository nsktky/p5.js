let x, y, z;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(20);
  rectMode(CENTER);
  x = 0
  y = 0
  z = 0
}

function draw() {
  // background(200);
  // noFill()

  translate(-width*0.1,0,0)
  x += sin(frameCount*0.01)
  y += cos(frameCount*0.01)
  z += sin(frameCount*0.01)

  translate(x,y,z)
  rotateX(frameCount*0.01)
  rotateZ(frameCount*0.02)
  fill(250,190,20,10)
  stroke(255,100)
  box(width*0.05);
}
