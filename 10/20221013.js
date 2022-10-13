let points = [];
let grid;

function setup() {
  createCanvas(800, 800);
  background(0);
  // angleMode(DEGREES);
  noStroke();

  grid = width / 100;

  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  // background(0);
  for (let i = 0; i < points.length; i++) {
    let size = map(
      noise(points[i].x * 0.001, points[i].y * 0.001, frameCount*0.001),
      0,
      1,
      -grid,
      grid
    );
    points[i].add(createVector(sin(size), cos(size)))
    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);
    circle(points[i].x, points[i].y, size);
  }
}
