let grid;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);
  angleMode(DEGREES);
  grid = width / 30;

  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let col = color(
        map(x, 0, width, 50, 255),
        map(y, 0, height, 50, 255),
        map(x / y, 0, width / height, 10, 255)
      );
      let tile = createPattern(grid, col);
      push();
      translate(x, y);
      if (random() > 0.25) {
        rotate(90);
      }
      image(tile, 0, 0);
      pop();
    }
  }
}

function createPattern(size, col) {
  let pattern = createGraphics(size, size);
  pattern.stroke(col);
  pattern.strokeWeight(2);
  pattern.line(0, pattern.height / 2, pattern.width / 2, 0);
  pattern.line(
    pattern.width,
    pattern.height / 2,
    pattern.width / 2,
    pattern.height
  );
  pattern.line(0, pattern.height, pattern.width, 0);
  return pattern;
}
