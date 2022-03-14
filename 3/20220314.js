let count = 0;
let tileCountX;
let tileCountY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
  stroke(174, 165, 161, 100);
  strokeWeight(2);

  tileCountX = int(random(3,8));
  tileCountY = int(random(3,8));

}

function draw() {
  background(109, 73, 69);

  count = frameCount / 20 + 5;
  let para = -1 * (frameCount*0.002) * height / height - 0.5;

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
        line(count, para * tileHeight, tileWidth / 2, (i / count - 0.5) * tileHeight);
        line(0, para * tileHeight, -tileWidth / 2, (i / count - 0.5) * tileHeight);
        line(count*0.7, para * tileHeight, (i / count - 0.5) * tileWidth, tileHeight / 2);
        line(count, para * tileHeight, (i / count - 0.5) * tileWidth, -tileHeight / 2);
      }
      pop();

    }
  }
}
