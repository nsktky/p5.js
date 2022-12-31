let count = 0;
let tileCountX;
let tileCountY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
  stroke(248, 184, 86);

  tileCountX = int(random(1,6));
  tileCountY = int(random(1,6));

}

function draw() {
  background(228, 142, 0, 20);

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
        line(para * tileWidth, para * tileHeight, tileWidth / 2, (i / count - 0.5) * tileHeight);
        line(para * tileWidth, para * tileHeight, -tileWidth / 2, (i / count - 0.5) * tileHeight);
        line(para * tileWidth, para * tileHeight, (i / count - 0.5) * tileWidth, tileHeight / 2);
        line(para * tileWidth, para * tileHeight, (i / count - 0.5) * tileWidth, -tileHeight / 2);
      }
      pop();

    }
  }
}
