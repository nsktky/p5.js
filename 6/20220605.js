let points = [];
let mult = 0.001;
let mult2 = 600;
let radius, colA, pointColA, colB, pointColB2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noiseDetail(3);
  angleMode(DEGREES);

  let tileCount = 80;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  colA = color(200, 188, 136, 100);
  colB = color(243, 195, 166, 100);
  pointColA = color(49, 141, 134, 100);
  pointColB = color(227, 119, 90, 100);

  radius = max(width, height) * 0.01;

}

function draw() {
  translate(width * 0.5, height * 0.5)
  rotate(frameCount);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    let d = dist(points[i].x, points[i].y, 0, 0);
    if (d > radius) {
      noStroke();
      fill(colA);
      circle(points[i].x, points[i].y, 1);
      fill(pointColA);
      circle(points[i].x+random(80), points[i].y+random(80), random(1));
    }

    if (d < radius) {
      noStroke();
      fill(colB);
      circle(points[i].x+random(50), points[i].y+random(50), random(1));
      fill(pointColB);
      circle(points[i].x+random(50), points[i].y+random(50), random(1));
    }
  }

  radius += 1;

  for (let i = 0; i < points.length; i++) {
    points[i].x = random(random(width));
    points[i].y = random(random(height));
  }

}