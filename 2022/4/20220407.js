let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(115, 141, 194);
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
  col = color(162, 215, 221, random(10, 100));
  col1 = color(41, 128, 175, random(10, 100));
  col2 = color(0, 162, 176, random(10, 100));
  col3 = color(229, 147, 180, random(10, 100));
  col4 = color(124, 189, 195, random(10, 100));

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x, points[i].y), 0, 1, 0, 360);
    points[i].add(createVector(sin(angle)*10, cos(angle)*10));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    fill(col);
    if (frameCount % 2 == 0) fill(col1);
    if (frameCount % 3 == 0) fill(col2);
    if (frameCount % 4 == 0) fill(col3);
    if (frameCount % 5 == 0) fill(col4);

    ellipse(points[i].x, points[i].y, random(10), random(10));
  }
}