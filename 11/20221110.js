let grid;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
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
  background(0, 5);
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * 0.00001, points[i].y * 0.0001, frameCount*0.0001),0,1,0,200)
    points[i].add(createVector(1, sin(angle)));
    if(points[i].x > width) points[i].x = 0;
    if(points[i].y > height*1.2) points[i].y = 0;
    if(points[i].y < -height*0.2) points[i].y = height;

    curtain(points[i].x, points[i].y, color(map(cos(angle),-1,1,0,255), 100, 100))
  }
}

function curtain(x, y, c) {
  fill(c);
  rect(x, y, grid*0.7);
}