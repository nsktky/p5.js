let points = [];
let mult = 0.1;
let mult2 = 600;
let col, timer, flag;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noiseDetail(1);
  noStroke();
  // angleMode(DEGREES);

  let tileCount = 100;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  col = color(180);

  timer = 180;
  flag = 0;
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    fill(col);
    ellipse(points[i].x, points[i].y, 1);
  }

  if(frameCount % timer == 0) {
    clear();
    background(0);

    if (flag == 0) {
      for (let i = 0; i < points.length; i++) {
        points[i].x = random(random(random(width)));
        points[i].y = random(random(random(height)));
      }
      flag ++;
    } else if (flag == 1) {
      for (let i = 0; i < points.length; i++) {
        points[i].x = width - random(random(random(width)));
        points[i].y = random(random(random(height)));
      }
      flag ++;
    } else if (flag == 2) {
      for (let i = 0; i < points.length; i++) {
        points[i].x = random(random(random(width)));
        points[i].y = height - random(random(random(height)));
      }
      flag ++;
    } else {
      for (let i = 0; i < points.length; i++) {
        points[i].x = width - random(random(random(width)));
        points[i].y = height - random(random(random(height)));
      }
      flag = int(random(4));
    }
  }
}