var font = 'sans-serif';
var letter = '9';
var size = 100

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0)
  fill(0, 1);
  textFont(font);
  textAlign(CENTER, CENTER);
  push();
}

function draw() {
  textSize(map(sin(frameCount * 0.01), -1, 1, 1, size));
  text(letter, width / 2, height / 2);
  size += 5

  if (size > 10000) {
    pop();
    clear();
    size = 100;
    push();
  }
}