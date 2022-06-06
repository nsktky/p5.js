let points = [];
let mult = 0.001;
let mult2 = 600;
let timer, radius, flag, colA, pointColA, colB, pointColB2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noiseDetail(1);
  angleMode(DEGREES);

  let tileCount = 80;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  colA = color(0, 170, 123, 150);
  colB = color(187, 153, 98, 150);
  pointColA = color(70, 50, 101, 150);
  pointColB = color(239, 124, 0, 150);

  radius = max(width, height) * 0.01;
  timer = 180;
  flag = 0;

}

function draw() {
  translate(width * 0.5, height * 0.5)
  rotate(frameCount*2);

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
      circle(points[i].x, points[i].y, 2);
      fill(pointColA);
      circle(points[i].x+random(80), points[i].y+random(80), random(4));
    }

    if (d < radius) {
      noStroke();
      fill(colB);
      circle(points[i].x+random(50), points[i].y+random(50), random(4));
      fill(pointColB);
      circle(points[i].x+random(50), points[i].y+random(50), random(4));
    }
  }

  radius += 1;

  if(frameCount % timer == 0) {
    clear();
    background(0);

    if (flag == 0) {
      for (let i = 0; i < points.length; i++) {
        points[i].x = random(random(random(width)));
        points[i].y = random(height);
      }
      flag ++;
    } else if (flag == 1) {
      for (let i = 0; i < points.length; i++) {
        points[i].x = width - random(random(random(width)));
        points[i].y = -random(height);
      }
      flag ++;
    } else if (flag == 2) {
      for (let i = 0; i < points.length; i++) {
        points[i].x = random(random(random(width)));
        points[i].y = random(random(random(height)));
      }
      flag ++;
    } else if (flag == 3) {
      for (let i = 0; i < points.length; i++) {
        points[i].x = width - random(random(random(width)));
        points[i].y = random(random(random(height)));
      }
      flag ++;
    } else if (flag == 4) {
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
      flag = int(random(6));
      radius = max(width, height) * 0.01;
    }
  }

}