let tileCount = 20;
let moduleColor;
let moduleAlpha = 100;
let maxDistance = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
  strokeWeight(1);
  moduleColor = color(201, 201, 196, moduleAlpha);
}

function draw() {
  clear();
  background(122, 124, 125);
  stroke(moduleColor);

  for (let gridY = 0; gridY < height; gridY += 100) {
    for (let gridX = 0; gridX < width; gridX += 25) {
      let x = sin(frameCount*0.0005) * width;
      let y = cos(frameCount*0.0015) * height;
      let diameter = dist(x, y, gridX, gridY);
      diameter = diameter / maxDistance;
      push();
      translate(gridX, gridY);
      rect(0, 0, diameter);
      pop();
    }
  }
}