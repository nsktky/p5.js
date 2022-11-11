let grid;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 30, 100);
  rectMode(CENTER);
  // angleMode(DEGREES);
  noStroke();
  grid = width / 100;

  for(let x = 0; x < width + grid; x += grid) {
    for(let y = 0; y < height + grid; y += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  background(0, 30, 100, 10);
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * 0.001, points[i].y * 0.001, frameCount*0.001),0,1,0,300)
    points[i].add(createVector(cos(angle), -1));
    if(points[i].x > width) points[i].x = 0;
    if(points[i].y > height*1.2) points[i].y = 0;
    if(points[i].y < -height*0.2) points[i].y = height;

    curtain(points[i].x, points[i].y, color(100, 255, 80))
  }
}

function curtain(x, y, c) {
  fill(c);
  rect(x, y, grid);
  fill(0);
  rect(x+grid*0.01, y+grid*0.01, grid);
}