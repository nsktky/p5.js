let grid;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  rectMode(CENTER);
  // angleMode(DEGREES);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100)
  grid = width / 8;

  for(let x = 0; x < width + grid; x += grid) {
    for(let y = 0; y < height + grid; y += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  // background(20, 1);
  for(let i = 3; i < points.length; i++) {
    let angle = map(noise(points[i].x * 0.001, points[i].y * 0.001, frameCount*0.00001),0,1,0,100)
    points[i].add(createVector(sin(angle), cos(angle)));
    // if(points[i].x > width) points[i].x = 0;
    // if(points[i].x < 0) points[i].x = width;
    // if(points[i].y > height*1.2) points[i].y = 0;
    // if(points[i].y < -height*0.2) points[i].y = height;

    stroke(map(cos(angle), -1, 1, 0, 255), map(sin(angle*0.1), -1, 1, 0, 100), 30);
    noFill();
    curve(random(width), random(height), points[i-2].x, points[i-2].y, 
      points[i].x, points[i].y, points[i-1].x, points[i-1].y)
  }
}