let grid;
let points = [];
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  grid = width / 10;
  for (let x = 0; x < width + grid; x += grid) {
    for (let y = 0; y < height + grid; y += grid) {
      let ox = random(width);
      let oy = random(height);
      let r = map(noise(x * 0.001, y * 0.001, tan(ox) / sin(oy)), 0, 1, 180, 230);
      let col = color(r, r * 0.5, 50, 100);
      let p = createVector(ox, oy, col);
      points.push(p);
    }
  }
  blendMode(DIFFERENCE);
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    push();
    let angle = map(noise(points[i].x * 0.01, points[i].y * 0.01, frameCount * 0.0005), 0, 1, 0, 360);
    points[i].x += sin(angle) * 0.5;
    points[i].y += cos(angle) * 0.5;
    if (points[i].x < 0) points[i].x = width;
    if (points[i].x > width) points[i].x = 0;
    if (points[i].y < 0) points[i].y = height;
    if (points[i].y > height) points[i].y = 0;

    translate(points[i].x, points[i].y);
    rotate(i * frameCount * 0.0005);
    fill(points[i].z);
    ellipse(0, 0, counter);
    pop();
  }
  counter = sin(frameCount * 0.025) * grid * 0.3;
}
