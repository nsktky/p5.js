let count = 0;
let tileCountX = 3;
let tileCountY = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);
  noFill();

  count = frameCount / 10 + 10;
  let para = frameCount / height;

  let tileWidth = width / tileCountX;
  let tileHeight = height / tileCountY;

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {

      let posX = tileWidth * gridX + tileWidth / 2;
      let posY = tileHeight * gridY + tileHeight / 2;

      push();
      translate(posX, posY);

        stroke(255);
        for (let i = 0; i < count; i++) {
          rect(0, 0, tileWidth, tileHeight);
          scale(1 - 3 / count);
          rotate(para * 0.01);
        }

      pop();

    }
  }
}