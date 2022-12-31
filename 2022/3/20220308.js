let count = 0;
let tileCountX = 10;
let tileCountY = 10;
let tileWidth = 0;
let tileHeight = 0;

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
  tileWidth = width;
  tileHeight = height;
  actRandomSeed = random(10000);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(169, 153, 190);
  randomSeed(actRandomSeed);

  translate(tileWidth / 2, tileHeight / 2);

  circleCount = (frameCount) / 20 + 1;
  endSize = map(cos(frameCount), -1, 1, tileWidth*0.7, tileWidth*0.2);
  endOffset = map(sin(frameCount*0.5), -1, 1, -1 * (tileWidth - endSize) / 2, (tileWidth - endSize) / 2);

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
        stroke(217, 204, 160);
        circle(offset, 0, diameter);
        stroke(199, 208, 227);
        circle(offset/4, 0, diameter/4);
      }
      pop();
    }
  }
}
