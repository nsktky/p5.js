
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
  rectMode(CENTER);
  angleMode(DEGREES);

  createCanvas(windowWidth, windowHeight);
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
  actRandomSeed = random(10000);
  noFill();
  stroke(245, 225, 173);
  strokeWeight(2);
}

function draw() {
  background(76, 61, 22, 1);
  randomSeed(actRandomSeed);

  translate(tileWidth / 2, tileHeight / 2);

  circleCount = (frameCount*0.5) / 40 + 1;
  endSize = map(cos(frameCount*2), -1, 1, tileWidth*0.8, tileWidth*0.1);
  endOffset = map(sin(frameCount), -1, 1, -1 * (tileWidth - endSize) / 2, (tileWidth - endSize) / 2);

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {
      push();
      translate(tileWidth * gridX, tileHeight * gridY);
      scale(1, tileHeight / tileWidth);

      let toggle = int(random(0, 8));
      if (toggle == 0) rotate(73);
      if (toggle == 1) rotate(16);
      if (toggle == 2) rotate(111);
      if (toggle == 3) rotate(55);
      if (toggle == 4) rotate(23);
      if (toggle == 5) rotate(3);
      if (toggle == 6) rotate(153);
      if (toggle == 7) rotate(172);

      for (let i = 0; i < circleCount; i++) {
        let diameter = map(i, 0, circleCount, tileWidth, endSize);
        let offset = map(i, 0, circleCount, 0, endOffset);
        rect(offset, 0, diameter);
      }
      pop();
    }
  }
}
