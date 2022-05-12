let points = [];
let mult = 0.001;
let mult2 = 600;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(60, 15, 7);
  noiseDetail(4);
  // angleMode(DEGREES);

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
  let col1 = color(237, 214, 167, 2);
  let col2 = color(242, 147, 88, 80);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));
    let d = dist(points[i].x, points[i].y, width*0.5, height*0.5);
    
    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    if(d < 300) {
      stroke(col1)
      line(-width*0.1, -height*0.1, points[i].x, points[i].y);
      fill(col2)
      ellipse(points[i].x, points[i].y, 2);
    }
  }
}