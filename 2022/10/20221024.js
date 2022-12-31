let points = []
let grid

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  // angleMode(DEGREES)
  noStroke();

  grid = width / 100
  for (let y = 0; y < height + grid; y += grid) {
    for (let x = 0; x < width + grid; x += grid) {
      let p = createVector(x, y)
      points.push(p)
    }
  }

}

function draw() {
  background(0)
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * 0.01, points[i].y * 0.01), 0, 1, 0, 360)
    let size = map(noise(points[i].x * 0.01, points[i].y * 0.01, frameCount * 0.01), 0, 1, -5, 5)
    points[i].add(createVector(cos(angle), sin(angle)))
    fill(250, 190, 20)
    rect(points[i].x, points[i].y, size)
  }

}
