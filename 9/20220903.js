function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(20);
  rectMode(CENTER);
}

function draw() {
  background(20);
  for(let i = 0; i < 30; i++){
  translate(0, 0,sin(frameCount*0.002)*min(width, height)*0.5)
  rotateX(frameCount*0.001);
  rotateY(frameCount*0.005);
  rotateZ(frameCount*0.0001);

  noFill();
  stroke(200)
  box(width*0.1);
  }
}
