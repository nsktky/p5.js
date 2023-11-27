let grid;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(22, 20, 30);
  noStroke()
  angleMode(DEGREES);
  grid = min(width, height) / 10

  for(let x = 0; x < width + grid; x+=grid) {
    for(let y = 0; y < height + grid; y+=grid) {
      let z = random()
      let p = createVector(x, y, z)
      points.push(p);
    }
  }
}

function draw() {
  background(22, 20, 30, 10)

  for(let i = 0; i < points.length; i++) {
    fill(random(200, 250), 100, 20);
    let angle = points[i].z * frameCount - random(20);
    let r = grid;
    let x = r * cos(angle)/sin(angle);
    let y = r * sin(angle);
    circle(points[i].x + x, points[i].y + y, 1)
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20231127-2', 'png');
  }
}