let points = [];
let grid, mult;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  colorMode(HSB, 360, 100, 100, 100);
  stroke(0, 0, 100, 100)
  tileCount = 20;
  grid = width / tileCount;
  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  mult = random(100000);
  noStroke();
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    fill(map(noise((points[i].x * points[i].y) * mult),0, 1, 0, 360), 80, 100, 10)
    circle(points[i].x, points[i].y, grid/frameCount*1000);
  }
}
