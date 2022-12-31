let points = [];
let mult = 0.001;
let mult2 = 600;
let radius;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noiseDetail(4);

  let tileCount = 10;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  radius = min(width, height) * 0.4;

  for (let i = 0; i < 10000; i++) {
    stroke(255, random(50, 200));
    point(random(width), random(height));
  }

  fill(0, 85, 129, 170);
  noStroke();
  circle(width * 0.5, height * 0.5, radius * 2);
}

function draw() {
  let col1 = color(239, 242, 247, 1);
  let col2 = color(178, 215, 182, 2);
  stroke(col2);


  beginShape(TRIANGLE_FAN);
  // beginShape(QUAD_STRIP);
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    let d = dist(points[i].x, points[i].y, width * 0.5, height * 0.5);
    if (d < radius) {
      fill(col1);
      vertex(points[i].x, points[i].y);
     }
  }
  endShape(CLOSE);
}