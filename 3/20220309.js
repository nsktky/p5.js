let tileCount = 20;
let moduleColor;
let moduleAlpha = 180;
let maxDistance = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(3);
  moduleColor = color(242, 186, 35, moduleAlpha);
}

function draw() {
  clear();

  background(0, 141, 86);
  stroke(moduleColor);

  for (let gridY = 0; gridY < height; gridY += 25) {
    for (let gridX = 0; gridX < width; gridX += 25) {
      let diameter = dist(frameCount*2 - 300, 0, gridX, gridY);
      diameter = diameter / maxDistance * 40;
      push();
      translate(gridX, gridY);
      circle(0, 0, diameter);
      pop();
    }
  }
}