let points = [];
let grid, col;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
  colorMode(HSB, 360, 100, 100, 100)

  let tileCount = 50
  grid = width / tileCount;
  for(let y = 0; y < height; y+=grid) {
    for(let x = 0; x < width; x+=grid) {
      let p =createVector(x, y);
      points.push(p);
      rect(x, y, grid);
    }
  }
  col = random();
}

function draw() {
  for(let i = 0; i < points.length; i++) {
    stroke(100)
    fill(noise(points[i].y/points[i].x + points[i].x/points[i].y + col) * 100, 100, 100, 100);
    rect(points[i].x, points[i].y, grid);
    col += 0.00001
  }
}