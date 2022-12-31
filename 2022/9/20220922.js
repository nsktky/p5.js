let noiseStep = 0.005;
let timeStep = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(20)
  grid = width / 200
  for(let y = 0; y < height+grid; y+= grid){
    for(let x = 0; x < width+grid; x+= grid){
      let angle = noise(x * noiseStep, y * noiseStep, frameCount*timeStep)*360;
      let a = map(sin(angle), -1, 1, 0, grid)
      let b = map(cos(angle), -1, 1, 0, grid)
      fill(a*200, b*200, a/b*50)
      rect(x, y, a, b);
    }
  }
}