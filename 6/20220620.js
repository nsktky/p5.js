let points = [];
let bar = [];
let barSize = [];
let mult = 0.001;
let mult2 = 600;
let bgcol, barCol, barShadeCol, bars;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgcol = color(85, 0, 48);
  barCol = color(250);
  barShadeCol = color(0, 200);
  bars = int(random(3, 6));

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
    let size = random(width*0.01, width*0.1);
    bar.push(p);
    barSize.push(size);
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
    // let gradientFill = drawingContext.createRadialGradient(
    //   width * 0.5,
    //   height * 0.5,
    //   width * 0.1,
    //   width *0.5,
    //   height * 0.5,
    //   width * 0.7
    // );
    // gradientFill.addColorStop(0, color(235, 97, 42));
    // gradientFill.addColorStop(0.5, color(205, 103, 21));
    // gradientFill.addColorStop(1, color(62, 34, 0));
    // drawingContext.fillStyle = gradientFill;
    // circle(points[i].x, points[i].y, 5);

    let gradientFill2 = drawingContext.createRadialGradient(
      width * 0.5,
      height * 0.5,
      width * 0.1,
      width *0.5,
      height * 0.5,
      width * 0.7
    );
    gradientFill2.addColorStop(0, color(252, 232, 225));
    gradientFill2.addColorStop(0.5, color(200, 162, 142));
    gradientFill2.addColorStop(1, color(178, 120, 85));
    drawingContext.fillStyle = gradientFill2;
    circle(points[i].x+random(5), points[i].y+random(5), 5);

    // fill(bgcol);
    // circle(points[i].x+random(5), points[i].y+random(5), random(10));
    pop();
  }

  for(let i = 0; i < bar.length; i++) {
    strokeWeight(min(height, width)*0.03);
    stroke(barShadeCol);
    line(bar[i].x, bar[i].y, bar[i].x+barSize[i]*frameCount*0.005, bar[i].y-barSize[i]*frameCount*0.005);
    stroke(barCol);
    line(bar[i].x, bar[i].y, bar[i].x, bar[i].y-barSize[i]);
  }
}