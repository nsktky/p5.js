let points = [];
let mult = 0.0001;
let mult2 = 60;
let col, bgcol, radius, counter;
let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  col = color(100);
  bgcol = color(57, 55, 58);
  radius = max(width, height) * 0.05;
  counter = 1;

  background(bgcol);
  noiseDetail(4);
  noStroke();
  rectMode(CENTER);
  // angleMode(DEGREES);

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
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    push();
    let gradientFill = drawingContext.createRadialGradient(
      width / 2,
      height / 2,
      width * 0.1,
      width / 2,
      height / 2,
      width * 0.5
    );
    gradientFill.addColorStop(0, color(247, 220, 141));
    gradientFill.addColorStop(0.5, color(253, 215, 93));
    gradientFill.addColorStop(1, color(163, 107, 33));
    drawingContext.fillStyle = gradientFill;
    circle(points[i].x, points[i].y, radius);
    pop();

    fill(col);
    circle(points[i].x, points[i].y, radius*0.8);
  }

  radius += map(noise(counter), 0, 1, -10, 10);
  if(radius < 0) radius = random(10);
  if(radius > max(width, height)) radius = random(10);

  counter += 0.001;
}