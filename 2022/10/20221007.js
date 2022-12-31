let points = [];
let grid;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(151, 147, 93);
  rectMode(CENTER);
  noStroke();
  grid = width / 50;
  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  background(0, 1);
  for (let i = 0; i < points.length; i++) {
    let op = int(map(noise(frameCount * 0.01), 0, 1, 0, points.length));
    stroke(200, 100, 20, 20);
    fill(250, 190, 20, i);
    rect(points[op].x, points[op].y, grid);

    let op2 = int(map(noise(frameCount * 0.1), 0, 1, 0, points.length));
    stroke(159, 9, 27, 20);
    fill(189, 39, 57, i);
    rect(points[op2].x, points[op2].y, grid);
  }
}
