let points = [];
let mult = 0.00001;
let mult2 = 600;
let bgcol, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgcol = color(47, 38, 56);
  radius = min(width, height) * 0.4;

  background(bgcol);
  noiseDetail(4);
  noStroke();
  // angleMode(DEGREES);

  let tileCount = 40;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  for(let i = 0; i < 1000; i++) {
    fill(255);
    circle(random(width), random(height), random(5));
  }
  filter(BLUR, 2);
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    let d = dist(points[i].x, points[i].y, width * 0.5, height * 0.5);

    if(d < radius){
      push();
      let gradientFill = drawingContext.createRadialGradient(
        width * 0.5,
        height * 0.1,
        width * 0.1,
        width / 2,
        height / 2,
        width * 0.5
      );
      gradientFill.addColorStop(0, color(4, 179, 169));
      gradientFill.addColorStop(0.5, color(0, 55, 126));
      gradientFill.addColorStop(1, color(0, 75, 101));
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
      gradientFill2.addColorStop(0.5, color(150));
      gradientFill2.addColorStop(1, color(0));
      drawingContext.fillStyle = gradientFill2;
      circle(points[i].x+random(5), points[i].y+random(5), 5);

      fill(60);
      circle(points[i].x+random(5), points[i].y+random(5), random(10));
      pop();
    }
  }
}