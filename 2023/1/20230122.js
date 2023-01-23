let noiseStep = 0.001;
let timeStep = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  // blendMode(DIFFERENCE);
}

function draw() {
  background(20)
  grid = width / 100
  for(let y = 0; y < height+grid; y+= grid){
    for(let x = 0; x < width+grid; x+= grid){
      let angle = noise(x * noiseStep, y * noiseStep, frameCount*timeStep)*360;
      let a = map(sin(angle), -1, 1, 0, grid)
      let b = map(cos(angle), -1, 1, 0, grid)
      fill(a*2, b*2, a*b*tan(frameCount*0.5))
      rect(x, y, a+b);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}