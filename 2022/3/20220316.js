let count = 0;
let tileCountX = 4;
let tileCountY = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(63, 60, 124);
  noFill();

  count = frameCount + 10;
  let para = frameCount / height;

  let tileWidth = width / tileCountX;
  let tileHeight = height / tileCountY;

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {

      let posX = tileWidth * gridX + tileWidth / 2;
      let posY = tileHeight * gridY + tileHeight / 2;

      push();
      translate(posX, posY);

        stroke(184, 41, 81);
        for (let i = 0; i < count; i++) {
          ellipse(0, para * height * 0.3, tileWidth, tileHeight);
          scale(1 - 2 / count);
          rotate(para * 0.005);
        }
      pop();
    }
  }
}