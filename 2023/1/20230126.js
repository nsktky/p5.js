let points = [];
let grid

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 30, 10);
  noStroke()
  angleMode(DEGREES);
  grid = width / 30;

  for(let y = 0; y < height; y+=grid) {
    for(let x = 0; x < width; x+=grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x, points[i].y, frameCount), 0, 1, 0, 360);
    points[i].add(createVector(sin(angle)+cos(angle), tan(angle)))
    fill(angle, 200, 10)
    circle(points[i].x, points[i].y, grid*0.1);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}