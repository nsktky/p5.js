let points = [];
let mult = 0.001;
let mult2 = 600;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(58, 53, 44);
  noiseDetail(4);
  // angleMode(DEGREES);

  let tileCount = 15;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  let col1 = color(252, 225, 94, 5);
  let col2 = color(134, 157, 184, 5);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    if(frameCount % 2 == 0){
      stroke(col1);
    } else {
      stroke(col2);
    }

    line(random(width), height*0.5, points[i].x, points[i].y);
    point(points[i].x, points[i].y);

    if(frameCount % 180 == 0){
      stroke(215, 192, 68, 100);
      noFill();
      circle(points[i].x, points[i].y, random(5));
      circle(points[i].x, points[i].y, random(10));
      circle(points[i].x, points[i].y, random(20));
    }
  }
}