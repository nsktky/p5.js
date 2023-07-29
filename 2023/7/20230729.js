let grid;
let points = [];
let count = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  // colorMode(HSB, 360, 100, 100, 100)
  // noStroke();
  // rectMode(CENTER);
  grid = width / 40;
  for(let y = 0; y < height + grid; y += grid * 1.2) {
    for(let x = 0; x <= width + grid; x += grid) {
      let c;
      if(count % 2 == 0){
        c = 255
        fill(c);
      } else {
        c = 0
        fill(c);
      }
      let p = createVector(x, y, c)
      points.push(p);
      // rect(x, y, grid);
      count += 1
    }
  }
}

function draw() {
  noFill();
  for(let i = 0; i < points.length; i++) {
    let angle = map(sin(frameCount), -1, 1, 0, 360)
    let p = createVector(sin(angle*sin(angle)), cos(angle));
    points[i].add(p)
    stroke(color(points[i].x*0.2, 40, points[i].z, 100))
    rect(points[i].x, points[i].y, grid);
    if(points[i].x > width) points[i].x = 0
    if(points[i].x < 0) points[i].x = width
    if(points[i].y > height) points[i].y = 0
    if(points[i].y < 0) points[i].y = height
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20230729-2', 'png');
  }
}
