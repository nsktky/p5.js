let points = [];
let mult = 0.001;
let mult2 = 600;
let radius, colA, pointColA, colB, pointColB2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(11, 22, 68);
  noiseDetail(1);
  noStroke();
  angleMode(DEGREES);

  let tileCount = 40;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  colA = color(192, 133, 184, 50);
  pointColA = color(238, 227, 217, 50);
  colB = color(113, 183, 132, 50);
  pointColB2 = color(169, 98, 130, 50);

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
      circle(points[i].x+random(100), points[i].y+random(100), random(1));
    }

    if (d < radius) {
      noStroke();
      fill(colB);
      circle(points[i].x-random(50), points[i].y-random(50), random(1));
      fill(pointColB2);
      circle(points[i].x+random(50), points[i].y+random(50), random(1));
    }
  }

  radius += 1;

}