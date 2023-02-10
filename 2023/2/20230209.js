let noiseStep = 0.0001;
let timeStep = 0.0005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  background(20, 100, 30)
  grid = width / 100
  for(let y = 0; y < height+grid; y+= grid){
    for(let x = 0; x < width+grid; x+= grid){
      let angle = noise(x * noiseStep, y * noiseStep, frameCount*timeStep)*360;
      let a = map(sin(angle), -1, 1, 0, grid)
      let b = map(cos(angle), -1, 1, 0, grid)
      fill(angle, a, b*b)
      ellipse(x, y, a+b, b-a);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}