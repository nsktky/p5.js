let points = [];
let mult = 0.1;
let mult2 = 450;
let col, bgcol, timer, flag;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noiseDetail(1);
  noStroke();
  angleMode(DEGREES);

  let tileCount = 30;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  col = color(248, 182, 52);
  col2 = color(255, 252, 213);
  bgcol = color(213, 155, 63);

  timer = 180;
  flag = 0;
}

function draw() {
  background(bgcol);
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    fill(col)
    circle(points[i].x, points[i].y, random(1, 20));
    fill(col2)
    circle(points[i].x+random(2), points[i].y+random(2), random(1, 20));
  }

  if(frameCount % timer == 0) {
    clear();
    background(bgcol);

    if (flag == 0) {
      for (let i = 0; i < points.length; i++) {
        points[i].x = random(width);
        points[i].y = random(random(random(width)));
      }
      flag ++;
    } else if (flag == 1) {
      for (let i = 0; i < points.length; i++) {
        points[i].x = random(width);
        points[i].y = height - random(random(random(width)));
      }
      flag ++;
    } else if (flag == 2) {
      for (let i = 0; i < points.length; i++) {
        points[i].x = random(width);
        points[i].y = random(height);
      }
      flag = 0;
    }
  }
}