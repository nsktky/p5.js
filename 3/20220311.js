let tileCount = 500;
let moduleColor;
let moduleAlpha = 255;
let maxDistance = 80;
let mode = 0;
let actRandomSeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
  noCursor();
  strokeWeight(1);
  actRandomSeed = random(10000);
}

function draw() {
  randomSeed(actRandomSeed);

  clear();
  background(101, 84, 103);

  for (let gridY = 0; gridY < height; gridY += 25) {
    for (let gridX = 0; gridX < width; gridX += 25) {
      let diameter = dist(mouseX, mouseY, gridX, gridY);
      diameter = diameter / maxDistance * 40;
      push();
      translate(gridX, gridY);

      mode = int(random(2));
      if (mode == 0) {
        moduleColor = color(178, 109, 145, moduleAlpha);
      } else {
        moduleColor = color(204, 154, 168, moduleAlpha);
      }

      stroke(moduleColor);
      rect(0, 0, diameter);
      pop();
    }
  }
}