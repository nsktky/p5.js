let points = [];
let mult = 0.001;
let mult2 = 600;
let radius;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noiseDetail(4);

  let tileCount = 40;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  radius = max(width, height) * 0.5;

  for (let i = 0; i < 10000; i++) {
    stroke(255, random(130, 230));
    point(random(width), random(height));
  }
}

function draw() {
  let col1 = color(239, 242, 247, 2);
  let col2 = color(178, 215, 182, 1);
  stroke(col2);

  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    let d = dist(points[i].x, points[i].y, width * 0.5, height * 0.5);
    if (d < radius) {
      stroke(col1);
      line(width*0.5, height*0.5, points[i].x, points[i].y);
     }
  }
}