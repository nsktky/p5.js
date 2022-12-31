let points = [];
let bar = [];
let mult = 0.001;
let mult2 = 600;
let bgcol, radius, bars;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgcol = color(200);
  radius = min(width, height) * 0.4;
  bars = int(random(3, 14));

  background(bgcol);
  noiseDetail(4);
  noStroke();
  angleMode(DEGREES);

  let tileCount = 40;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  for (let i = 0; i < bars; i++) {
    let x = random(width*0.2, width*0.8);
    let y = random(height*0.2, height*0.8);
    let p = createVector(x, y);
    bar.push(p);
  }
}

function draw() {
  noStroke();
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    push();
    let gradientFill = drawingContext.createRadialGradient(
      width * 0.2,
      height * 0.7,
      width * 0.1,
      width / 2,
      height / 2,
      width * 0.5
    );
    gradientFill.addColorStop(0, color(129, 120, 52));
    gradientFill.addColorStop(0.5, color(111, 77, 62));
    gradientFill.addColorStop(1, color(97, 44, 22));
    drawingContext.fillStyle = gradientFill;
    circle(points[i].x, points[i].y, 5);
    
    let gradientFill2 = drawingContext.createRadialGradient(
      width * 0.2,
      height * 0.7,
      width * 0.1,
      width / 2,
      height / 2,
      width * 0.5
    );
    gradientFill2.addColorStop(0, color(0, 103, 136));
    gradientFill2.addColorStop(0.5, color(21, 69, 119));
    gradientFill2.addColorStop(1, color(0, 29, 66));
    drawingContext.fillStyle = gradientFill2;
    circle(points[i].x+random(5), points[i].y+random(5), 5);

    fill(bgcol);
    circle(points[i].x+random(5), points[i].y+random(5), random(10));
    pop();
  }

  for(let i = 0; i < bar.length; i++) {
    strokeWeight(10);
    stroke(39, 18, 10, 100);
    line(bar[i].x, bar[i].y, bar[i].x+50, bar[i].y-50);
    stroke(251, 250, 243);
    line(bar[i].x, bar[i].y-100, bar[i].x, bar[i].y);
  }
}