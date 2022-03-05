let tileCount = 20;
let seed;

function setup() {
  createCanvas(600, 600);
  background(0, 63, 113);
  strokeCap(ROUND);

  seed = random(100000);
}

function draw() {

  background(0, 63, 113);
  stroke(163, 150, 130)
  randomSeed(seed);

  for (let gridY = 0; gridY < tileCount; gridY ++) {
    for (let gridX = 0; gridX < tileCount; gridX ++){

      let posX = width / tileCount * gridX;
      let posY = height / tileCount * gridY;
      let toggle = int(random(0, 2));

      if (toggle == 0) {
        strokeWeight(map(sin(frameCount*0.01),-1 ,1, 1, 20));
        line(posX, posY, posX + width / tileCount, posY + height / tileCount);
      } else if (toggle == 1) {
        strokeWeight(map(cos(frameCount*0.01),-1 ,1, 1, 20));
        line(posX, posY + width / tileCount, posX + height / tileCount, posY);
      }
    }
  }

}