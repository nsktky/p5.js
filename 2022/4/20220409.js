let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(49, 141, 134);
  noStroke();
  angleMode(DEGREES);

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

  col1 = color(200, 188, 136);
  col2 = color(243, 195, 151);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * 0.01, points[i].y * 0.01), 0, 1, 0, 90);
    points[i].add(createVector(sin(angle) , cos(angle) ));

    if (points[i].x > width) points[i].x = 0;
    if (points[i].x < 0) points[i].x = width;
    if (points[i].y < 0) points[i].y = height;
    if (points[i].y > height) points[i].y = 0;

    fill(col1);
    ellipse(points[i].x, points[i].y, 10);
    fill(col2);
    ellipse(points[i].x, points[i].y - 5, 10);
  }
}