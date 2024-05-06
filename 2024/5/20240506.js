let grid = 50;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // noStroke();
  stroke(255);
  noFill();
  rectMode(CENTER);
  for(let x = 0; x < width + grid; x+=grid) {
    for(let y = 0; y < height + grid; y+=grid){
      let p = createVector(x, y)
      points.push(p);
    }
  }
  angleMode(DEGREES);
}

function draw() {
  // background(0);
  for(let i = 0; i < points.length; i++){
    let angle = map(noise(points[i].x, points[i].y), 0, 1, 0, 800);
    points[i].add(0.1*sin(angle), 0.1*cos(angle));
    circle(points[i].x, points[i].y, grid)
  }
}

function keyPressed() {
  if (key == 'j'){
    saveCanvas('20240101-2', 'png');
  }
}