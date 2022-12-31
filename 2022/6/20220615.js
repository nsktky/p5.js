let points = [];
let mult = 0.01;
let mult2 = 60;
let col, bgcol, radius, counter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgcol = color(47, 38, 56);
  seacol = color(38, 53, 67);
  radius = max(width, height) * 0.05;
  counter = 1;

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

  for(let i = 0; i < 1000; i++) {
    fill(255, 200);
    circle(random(width), random(height*0.3), random(5));
  }

  fill(200, 58, 49);
  circle(width * 0.5, height * 0.3, height * 0.4);
  filter(BLUR, 2);

  fill(seacol);
  rect(0, height*0.3, width);
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
    translate(0, height*0.3)
    let gradientFill = drawingContext.createRadialGradient(
      width * 0.5,
      height * 0.1,
      width * 0.1,
      width / 2,
      height / 2,
      width * 0.5
    );
    gradientFill.addColorStop(0, color(247, 220, 141));
    gradientFill.addColorStop(0.5, color(240, 131, 0));
    gradientFill.addColorStop(1, color(110, 74, 32));
    drawingContext.fillStyle = gradientFill;
    circle(points[i].x, points[i].y, 5);
    
    let gradientFill2 = drawingContext.createRadialGradient(
      width * 0.5,
      height * 0.1,
      width * 0.1,
      width / 2,
      height / 2,
      width * 0.5
    );
    gradientFill2.addColorStop(0, color(255));
    gradientFill2.addColorStop(0.5, color(100));
    gradientFill2.addColorStop(1, color(0));
    drawingContext.fillStyle = gradientFill2;
    circle(points[i].x+random(5), points[i].y+random(5), 5);

    fill(seacol);
    circle(points[i].x+random(5), points[i].y+random(5), random(10));
    pop();
  }
}