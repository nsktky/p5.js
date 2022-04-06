let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 45, 95);
  noStroke();

  let tileCount = 10;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x, points[i].y), 0, 1, 0, 360);
    points[i].add(createVector(sin(angle)*10, cos(angle)*10));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    fill(141, 171, 197, random(10, 200));
    rect(points[i].x, points[i].y, 3);
  }
}