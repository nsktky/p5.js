let x, y, vx, vy, grid;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(160);
  rectMode(CENTER);
  // noStroke();
  x = random(width);
  y = random(height);
  vx = random(2, 5);
  vy = random(2, 5);
  grid = width / 10;
}

function draw() {
  if (x < 0 || x > width) {
    vx *= -1;
  }
  if (y < 0 || y > height) {
    vy *= -1;
  }
  x += vx;
  y += vy;
  rect(x, y, grid);
}
