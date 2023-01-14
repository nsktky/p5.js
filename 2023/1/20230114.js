let points = [];
let grid;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(70);
  angleMode(DEGREES);
  rectMode(CENTER);

  let tileCount = 40;
  grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  fill(30);
  rect(width * 0.5, height * 0.5, width * 0.6, height * 0.6);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x, points[i].y, frameCount), 0, 1, 100, 1000);
    points[i].add(createVector(cos(angle), sin(angle)));
    let H = map(noise(points[i].x, points[i].y, frameCount*0.01), 0, 1, 0, 360);
    let S = map(noise(points[i].y, frameCount*0.001), 0, 1, 0, 100);
    let B = map(noise(points[i].x, frameCount*0.001), 0, 1, 0, 100);
    if (points[i].x > width * 0.75) points[i].x = random(width*0.25, width*0.75);
    if (points[i].x < width * 0.25) points[i].x = random(width*0.25, width*0.75);
    if (points[i].y < height * 0.25) points[i].y = random(height*0.25, height*0.75);
    if (points[i].y > height * 0.75) points[i].y = random(height*0.25, height*0.75);
    fill(H, S, B, 100);
    ellipse(points[i].x, points[i].y, 4);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}