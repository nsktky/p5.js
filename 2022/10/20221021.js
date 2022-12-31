let grid;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  imageMode(CENTER);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  grid = width / 30;

  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let col = color(
        map(x, 0, width, 50, 360),
        map(y, 0, height, 0, 100),
        map(x / y, 0, width / height, 50, 100)
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
  pattern.noFill();
  pattern.strokeWeight(2);
  pattern.ellipse(pattern.width / 2, pattern.height / 2, size, size * 1.2);
  pattern.ellipse(pattern.width / 4, pattern.height / 4, size * 0.1);
  pattern.ellipse((pattern.width * 3) / 4, pattern.height / 4, size * 0.1);
  pattern.ellipse(
    pattern.width / 2,
    pattern.height / 3,
    size * 0.1,
    size * 0.01
  );

  return pattern;
}
