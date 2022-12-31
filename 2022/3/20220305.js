let tileCount = 100;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  seed = random(100000);
}

function draw() {
  background(62, 107, 90);
  stroke(204, 223, 162);
  randomSeed(seed);

  translate(width / tileCount / 2, height / tileCount / 2);

  for (let gridY = 0; gridY < tileCount; gridY ++) {
    for (let gridX = 0; gridX < tileCount; gridX ++){

      let posX = width / tileCount * gridX;
      let posY = height / tileCount * gridY;
      let shiftX = random(-mouseX, mouseX);
      let shiftY = random(-mouseY, mouseY);

      strokeWeight(1);
      ellipse(posX + shiftX, posY + shiftY, 1);
    }
  }

}