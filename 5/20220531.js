let points = [];
let mult = 0.001;
let mult2 = 200;
let radius, colA, pointColA, colB, pointColB2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(204, 203, 196);
  noiseDetail(1);
  noStroke();
  // angleMode(DEGREES);

  let tileCount = 80;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  colA = color(217, 113, 105, 100);
  pointColA = color(158, 200, 168, 100);
  colB = color(254, 236, 204, 50);
  pointColB2 = color(246, 217, 230, 100);

  radius = max(width, height) * 0.01;
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    let d = dist(points[i].x, points[i].y, width * 0.5, height * 0.5);
    if (d > radius) {
      noStroke();
      fill(colA);
      circle(points[i].x, points[i].y, 1);
      fill(pointColA);
      circle(points[i].x+random(50), points[i].y+random(50), random(1));
      circle(points[i].x-random(50), points[i].y-random(50), random(1));
    }

    if (d < radius) {
      noStroke();
      fill(colB);
      circle(points[i].x, points[i].y, 1);
      fill(pointColB2);
      circle(points[i].x+random(50), points[i].y+random(50), random(1));
    }
  }

  radius += 1;

}