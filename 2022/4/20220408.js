let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(168, 154, 139);
  strokeWeight(20);

  let tileCount = 20;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  background(168, 154, 139, 50);

  col1 = color(198, 210, 200);
  col2 = color(154, 168, 151);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x, points[i].y), 0, 1, 0, 360);
    points[i].add(createVector(sin(angle) * 10, cos(angle) * 10));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    stroke(col1)
    line(points[i].x, points[i].y, width / 2, height / 2);
    stroke(col2)
    line(points[i].x + random(10), points[i].y + random(10), width / 2, height / 2);
  }
}