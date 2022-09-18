let count;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
  rectMode(CENTER);
  count = 1;
  noStroke();
}

function draw() {
  grid = 40;
  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let size = map(noise(x, y), 0, 1, 0, grid);
      let r = map(noise(x), 0, 1, 150, 255);
      let g = map(noise(x, y), 0, 1, 150, 255);
      let b = map(noise(y), 0, 1, 150, 255);
      fill(r, g, b);
      circle(x + frameCount * 0.1, y + count, size - count);
      count = map(cos(frameCount * 0.005), -1, 1, 0, grid);
    }
  }
}
