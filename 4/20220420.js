let points = [];
let mult = 0.01;
let mult2 = 0.1;
let rectWidth;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(31, 49, 84);
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
  let col1 = color(178, 215, 182, 150);
  let col2 = color(26, 166, 146, 10);
  let col3 = color(170, 27, 43, 100);

  col1 = color(253, 215, 93, 100);
  col2 = color(250, 191, 19, 10);
  
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 320, mult2);
    points[i].add(createVector(cos(angle)*tan(angle), sin(angle)*tan(angle) + 2));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    stroke(col1);
    fill(col2);
    ellipse(points[i].x, points[i].y, rectWidth*cos(angle*0.7), rectWidth*sin(angle*0.7));
    fill(col3);
    ellipse(points[i].x, points[i].y, rectWidth*0.5*cos(angle*0.7), rectWidth*0.5*sin(angle*0.7));
  }
}