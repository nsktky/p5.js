let x, y, radius;
let points = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  radius = min(width, height) * 0.05;
  let grid = width / 7
  fill(250, 230, 220);
  stroke(255, 40, 70);

  for(let y = 0; y < height + grid; y += grid) {
    for(let x = 0; x < width + grid; x += grid) {
      let p = createVector(x, y)
      points.push(p);
    }
  }
}

function draw() {
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * 0.01, points[i].y * 0.01, frameCount * 0.01), 0, 1, 0, 360);
    points[i].add(sin(angle), cos(angle));
    shape(points[i].x, points[i].y)
  }
}

function shape(positionX, positionY) {
  beginShape();
  for(let i = 0; i < 360; i++){
    let xoff = map(sin(i + positionX), -1, 1, 0, 0.3);
    let yoff = map(cos(i + positionY), -1, 1, 0, 0.3);
    let angle = map(noise(xoff, yoff, frameCount * 0.001), 0, 1, 0, 360);
    x = radius * (sin(angle) + cos(i)) + positionX
    y = radius * (cos(angle) - sin(i)) + positionY
    vertex(x, y)
  }
  endShape(CLOSE);
}