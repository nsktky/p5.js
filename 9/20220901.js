let seed;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(250);
  rectMode(CENTER);
  seed = random(100000000);
}

function draw() {
  randomSeed(seed)
  rotateX(frameCount*random(0.0001, 0.01));
  rotateY(frameCount*random(0.0001, 0.01));
  rotateZ(frameCount*random(0.0001, 0.01));
  fill(255,10)
  let size = map(cos(frameCount*0.01),-1,1,width*0.4,0);
  box(size)
}
