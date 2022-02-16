var font = 'sans-serif';
var letter = 'A';
var size = 100

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255, 5);
  textFont(font);
  textAlign(CENTER, CENTER);
  push();
}

function draw() {
  textSize(map(cos(frameCount * 0.01), -1, 1, 0, size));
  text(letter, width / 2, height / 2);
  size += 5

  if (size > 10000) {
    pop();
    background(0);
    size = 100;
    push();
  }
}