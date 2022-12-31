function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  translate(width/2, height/2)
  rotate(frameCount);
  fill(random(255), map(cos(frameCount*0.01),-1,1,0,100));
  rect(frameCount*0.1, frameCount*0.1, 10+frameCount*0.1);
}