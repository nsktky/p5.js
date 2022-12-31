
let count = 0;
let tileCountX = 10;
let tileCountY = 10;
let tileWidth = 0;
let tileHeight = 0;

let colorStep = 15;

let circleCount = 0;
let endSize = 0;
let endOffset = 0;

let actRandomSeed = 0;

function setup() {
  tileCountX = int(width / 10);
  tileCountY = int(height / 10);

  createCanvas(windowWidth, windowHeight);
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
  actRandomSeed = random(10000);
  noFill();
  stroke(180, 119, 138);
}

function draw() {
  background(98, 86, 49);
  randomSeed(actRandomSeed);

  translate(tileWidth / 2, tileHeight / 2);

  circleCount = (frameCount*0.5) / 10 + 1;
  endSize = map(cos(frameCount*0.01), -1, 1, tileWidth, 0);
  endOffset = map(sin(frameCount*0.01), -1, 1, -1 * (tileWidth - endSize) / 2, (tileWidth - endSize) / 2);

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {
      push();
      translate(tileWidth * gridX, tileHeight * gridY);
      scale(1, tileHeight / tileWidth);

      let toggle = int(random(0, 4));
      if (toggle == 0) rotate(-HALF_PI);
      if (toggle == 1) rotate(0);
      if (toggle == 2) rotate(HALF_PI);
      if (toggle == 3) rotate(PI);

      for (let i = 0; i < circleCount; i++) {
        let diameter = map(i, 0, circleCount, tileWidth, endSize);
        let offset = map(i, 0, circleCount, 0, endOffset);
        ellipse(offset, 0, diameter, diameter);
      }
      pop();
    }
  }
}
