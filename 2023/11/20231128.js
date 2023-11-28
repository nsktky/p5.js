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
      let p = createVector(random(width), random(height), z)
      points.push(p);
    }
  }
}

function draw() {
  background(22, 20, 30, 5)
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].z * frameCount - random(20)), 0, 1, 0, 360);
    let r = grid;
    let x = 3 * cos(angle)/sin(angle);
    let y = r * cos(angle);
    fill(angle, 100, y, 10);
    circle(points[i].x + x, points[i].y + y, 50)
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20231128-2', 'png');
  }
}