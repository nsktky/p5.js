let count = 0;
let tileCountX = 20;
let tileCountY = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
  stroke(92, 42, 99);
}

function draw() {
  background(0, 170, 123);

  count = frameCount / 20 + 5;
  let para = sin(frameCount*0.001) * height / height - 0.5;

  let tileWidth = width / tileCountX;
  let tileHeight = height / tileCountY;

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {

      let posX = tileWidth * gridX + tileWidth / 2;
      let posY = tileHeight * gridY + tileHeight / 2;

      push();
      translate(posX, posY);
      translate(-tileWidth / 2, -tileHeight / 2);
      for (let i = 0; i < count; i++) {
        line(0, (para + 0.5) * tileHeight, tileWidth, i * tileHeight / count);
        line(0, i * tileHeight / count, tileWidth, tileHeight - (para + 0.5) * tileHeight);
      }
      pop();

    }
  }
}
