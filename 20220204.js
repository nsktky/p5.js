var font;

function preload() {
  font = loadFont("FredokaOne-Regular.ttf");
}

var letter;
var size;
var tra = 255;

var a, b, i;
var x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  size = width / 10;

  a = random(1);
  b = random(1);
  i = random(1);

  x = width / 2;
  y = height / 2;
}

function draw() {
  if (i < 0.2) {
    buruburu();
  } else if (i < 0.4) {
    tikatika();
  } else if (i < 0.6) {
    kurukuru();
  } else if (i < 0.8) {
    uzyauzya();
  } else {
    pittari()
  }

}

function buruburu() {
  letter = "buruburu"
  background(255);
  fill(0);
  textSize(size);
  text(letter, width / 2 + random(5), height / 2 + random(5));
}

function tikatika() {
  letter = "tikatika"
  background(255);
  fill(0, random(100, 255));
  textSize(size);
  text(letter, width / 2, height / 2);
}

function kurukuru() {
  push();
  translate(width / 2, height / 2);
  rotate(frameCount);
  letter = "kurukuru"
  background(255);
  fill(0);
  textSize(size);
  text(letter, 0, 0);
  pop();
}

function uzyauzya() {
  if (0 < x　&& x < width || 0 < y && y < height ) {
    letter = "uzyauzya"
    fill(100);
    stroke(255);
    x += map(noise(a), 0, 1, -10, 10);
    y += map(noise(b), 0, 1, -10, 10);
    textSize(size);
    text(letter, x, y);
  } else {
    x = width / 2;
    y = height / 2;
  }
  a += 0.01
  b += 0.01
}

function pittari() {
  letter = "pittari"
  background(255);
  noFill();
  stroke(0);
  textSize(size);
  text(letter, width / 2, height / 2);

  if (a < size) {
    a = frameCount * 0.2
    fill(0)
    textSize(a);
    text(letter, width / 2, height / 2);
  } else {
    fill(250, 192, 52);
    stroke(119, 73, 122);
    strokeWeight(5);
    textSize(a);
    text(letter, width / 2, height / 2);
  }
}