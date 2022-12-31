let tileCountX = 5;
let tileCountY = 5;
let tileWidth;
let tileHeight;

let colorStep = 3;

let endSize = 0;
let stepSize = 30;

let actRandomSeed = 0;

let x, y, a, b, t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
  x = width / 2;
  y = height / 2;
  a = random(1);
  b = random(1);
  t = 0;
}

function draw() {
  background(225, 227, 0);
  randomSeed(actRandomSeed);

  stepSize = min(x, width) / 10;
  endSize = min(y, height) / 1000;

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {

      let posX = tileWidth * gridX;
      let posY = tileHeight * gridY;

      let heading = int(random(4));
      for (let i = 0; i < stepSize; i++) {
        let diameter = map(i, 0, stepSize, tileWidth, endSize);
        let red = max(i * colorStep * 1.2, 91);
        let green = max(i * colorStep * 1.3, 62);
        let blue = max(i * colorStep * 1.1, 149);
        fill(red, green, blue);
        stroke(red - 50, green - 50, blue - 50)
        switch (heading) {
        case 0: ellipse(posX + i, posY, diameter, diameter); break;
        case 1: ellipse(posX, posY + i, diameter, diameter); break;
        case 2: ellipse(posX - i, posY, diameter, diameter); break;
        case 3: ellipse(posX, posY - i, diameter, diameter); break;
        }
      }
    }
  }

  x += map(noise(a, t), 0.0, 1.0, -20.0, 20.0);
  y += map(noise(b, t), 0.0, 1.0, -20.0, 20.0);
  t += 0.01

  if (x > width) x = 0, actRandomSeed = random(100000);
  if (x < 0) x = width, actRandomSeed = random(100000);
  if (y < 0) y = height, actRandomSeed = random(100000);
  if (y > height) y = 0, actRandomSeed = random(100000);
}