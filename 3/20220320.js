let NORTH = 0;
let NORTHEAST = 1;
let EAST = 2;
let SOUTHEAST = 3;
let SOUTH = 4;
let SOUTHWEST = 5;
let WEST = 6;
let NORTHWEST = 7;
let direction;

let stepSize = 0.3;
let diameter = 1;

let posX;
let posY;

let colorPalette = ["#9f7d50", "#984f2b", "#c6ced3", "#63532b", "#9c9c82", "#838484", "#523329", "#6d839b"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#3b404e");
  noStroke();

  posX = width / 2;
  posY = height / 2;

  diameter = max(width, height) / 10;
}

function draw() {
  for (let i = 0; i <= 30; i++) {
    direction = int(map(noise(frameCount), 0, 1, 0, 7));

    if (direction == NORTH) {
      posY -= stepSize;
    } else if (direction == NORTHEAST) {
      posX += stepSize;
      posY -= stepSize;
    } else if (direction == EAST) {
      posX += stepSize;
    } else if (direction == SOUTHEAST) {
      posX += stepSize;
      posY += stepSize;
    } else if (direction == SOUTH) {
      posY += stepSize;
    } else if (direction == SOUTHWEST) {
      posX -= stepSize;
      posY += stepSize;
    } else if (direction == WEST) {
      posX -= stepSize;
    } else if (direction == NORTHWEST) {
      posX -= stepSize;
      posY -= stepSize;
    }

    if (posX > width) {
      posX = 0;
      colorPalette = shuffle(colorPalette);
    }
    if (posX < 0) {
      posX = width;
      colorPalette = shuffle(colorPalette);
    }
    if (posY < 0) {
      posY = height;
      colorPalette = shuffle(colorPalette);
    }
    if (posY > height) {
      posY = 0;
      colorPalette = shuffle(colorPalette);
    }

    fill(colorPalette[0])
    rect(posX , posY, diameter);
  }
}