let count = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  noStroke();
}

function draw() {
  // background(255);
  let grid = width / 10;
  for (let i = 0; i < width + grid; i += grid) {
    fill(255, 0, 0, 10);
    circle(i, count + sin(count * 0.1) * 10, grid);
    fill(0, 255, 0, 10);
    circle(i, count + sin(count * 0.01) * 10, grid);
    fill(0, 0, 255, 10);
    circle(i, count + sin(count * 0.001) * 10, grid);
  }
  count += 1;

  if (count > height + grid * 2) {
    clear();
    background(200);
    count = 0;
  }
}
