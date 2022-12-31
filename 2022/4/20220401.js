let tileCountX = 5;
let tileCountY = 10;
let tileWidth;
let tileHeight;

let colorStep = 3;

let endSize = 0;
let stepSize = 30;

let actRandomSeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
  noCursor();

}

function draw() {
  background(0);

  randomSeed(actRandomSeed);

  stepSize = min(mouseX, width) / 10;
  endSize = min(mouseY, height) / 5;

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {

      let posX = tileWidth * gridX;
      let posY = tileHeight * gridY;

      let heading = int(random(4));
      for (let i = 0; i < stepSize; i++) {
        let diameter = map(i, 0, stepSize, tileWidth, endSize);
        fill(i * colorStep);
        switch (heading) {
        case 0: ellipse(posX + i, posY, diameter, diameter); break;
        case 1: ellipse(posX, posY + i, diameter, diameter); break;
        case 2: ellipse(posX - i, posY, diameter, diameter); break;
        case 3: ellipse(posX, posY - i, diameter, diameter); break;
        }
      }
    }
  }
}

function mousePressed() {
  actRandomSeed = random(100000);
}