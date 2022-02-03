var x, y;
var a, b;
var r = 100;
var col = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  translate(width / 2, height / 2);
  x = width / 2;
  y = height / 2;
  a = random(1);
  b = random(1);
}

function draw() {
  x += map(noise(a), 0, 1, -10, 10);
  y += map(noise(b), 0, 1, -10, 10);
  if (0 < x　&& x < width || 0 < y && y < height ) {
    fill(col);
    stroke(col + 100);
    circle(x, y, r);
  } else {
    x = width / 2;
    y = height / 2;
  }

  a += 0.01;
  b += 0.01;

  if (0 < r) {
    r -= 1;
  } else {
    r = 100;
  }

  if (100 < col ) {
    col -= 1;
  } else {
    col = 255;
  }

}