let img;

function preload() {
  img = loadImage('image.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255);
  drawDroste(img, width / 2, height / 2, 1000, map(sin(frameCount*0.01), -1, 1, 0, 0.52), 0);
}

function drawDroste(img, x, y, size, scale, depth) {
  if (size > 5) {
    let newSize = size * scale;
    image(img, x, y, size, size);
    drawDroste(img, x + size / 4, y, newSize, scale, depth + 1);
    drawDroste(img, x - size / 4, y, newSize, scale, depth + 1);
    drawDroste(img, x, y + size / 4, newSize, scale, depth + 1);
    drawDroste(img, x, y - size / 4, newSize, scale, depth + 1);
  }
}


function keyPressed() {
  if (key == 'j'){
    saveCanvas('20240103-2', 'png');
  }
}