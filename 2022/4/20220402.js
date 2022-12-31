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
  noCursor();
  background(0);
  x = width / 2;
  y = height / 2;
  a = random(1);
  b = random(1);
  t = 0;
}

function draw() {
  randomSeed(actRandomSeed);

  stepSize = min(x, width) / 10;
  endSize = min(y, height) / 5;

  for (let gridY = 0; gridY <= tileCountY; gridY++) {
    for (let gridX = 0; gridX <= tileCountX; gridX++) {

      let posX = tileWidth * gridX;
      let posY = tileHeight * gridY;

      let heading = int(random(4));
      for (let i = 0; i < stepSize; i++) {
        let diameter = map(i, 0, stepSize, tileWidth, endSize);
        let red = max(i * colorStep * 0.8, 50);
        let green = max(i * colorStep * 0.9, 100);
        let blue = max(i * colorStep, 100);
        fill(red, green, blue);
        stroke(red + 30, green + 30, blue + 30)
        switch (heading) {
        case 0: rect(posX + i, posY, diameter, diameter); break;
        case 1: rect(posX, posY + i, diameter, diameter); break;
        case 2: rect(posX - i, posY, diameter, diameter); break;
        case 3: rect(posX, posY - i, diameter, diameter); break;
        }
      }
    }
  }

  x += map(noise(a, t), 0.0, 1.0, -5.0, 5.0);
  y += map(noise(b, t), 0.0, 1.0, -5.0, 5.0);
  t += 0.01

  if (x > width) x = 0, actRandomSeed = random(100000);
  if (x < 0) x = width, actRandomSeed = random(100000);
  if (y < 0) y = height, actRandomSeed = random(100000);
  if (y > height) y = 0, actRandomSeed = random(100000);
}