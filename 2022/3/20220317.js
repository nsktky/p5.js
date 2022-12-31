let count = 0;
let tileCountX = 2;
let tileCountY = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noFill();
  stroke(234, 140, 46);
  strokeWeight(2);
}

function draw() {
  background(85, 0, 48);

  count = frameCount + 10;
  let para = frameCount / height;

  let tileWidth = width / tileCountX;
  let tileHeight = height / tileCountY;

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {

      let posX = tileWidth * gridX;
      let posY = tileHeight * gridY;

      push();
      translate(posX, posY);

        for (let i = 0; i < count; i++) {
          triangle(0, tileHeight, tileWidth / 2, 0, tileWidth, tileHeight);
          scale(1 - 10 / count);
          rotate(para*0.5);
        }
      pop();
    }
  }
}