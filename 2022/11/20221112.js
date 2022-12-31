let grid;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  // angleMode(DEGREES);
  noStroke();
  grid = width / 10;

  for(let x = 0; x < width + grid; x += grid) {
    for(let y = 0; y < height + grid; y += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  background(255, 10);
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * 0.001, points[i].y * 0.001, frameCount*0.001),0,1,0,600)
    points[i].add(createVector(-1, cos(angle)));
    if(points[i].x > width) points[i].x = 0;
    if(points[i].x < 0) points[i].x = width;
    if(points[i].y > height*1.2) points[i].y = 0;
    if(points[i].y < -height*0.2) points[i].y = height;

    stroke(255,0,0);
    noFill()
    // point(points[i].x, points[i].y);
    circle(points[i].x, points[i].y, map(sin(angle*0.05), -1, 1, 0, grid));
  }
}