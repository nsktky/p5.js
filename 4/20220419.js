let points = [];
let mult = 0.01;
let mult2 = 0.1;
let rectWidth;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 82, 67);
  noiseDetail(1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  rectWidth = width * 0.4;

  let tileCount = 1;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  let col2 = color(0, 164, 150, 150);
  let col1 = color(220, 150);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 320, mult2);
    points[i].add(createVector(cos(angle)*tan(angle), sin(angle)*tan(angle)+5));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    stroke(col1);
    fill(col2);
    rect(points[i].x, points[i].y, rectWidth, rectWidth*0.01);
  }
}