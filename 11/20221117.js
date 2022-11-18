let grid;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250, 190, 20);
  // angleMode(DEGREES);
  grid = width / 3;

  for(let x = 0; x < width + grid; x += grid) {
    for(let y = 0; y < height + grid; y += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  background(250, 190, 20, 1);
  for(let i = 2; i < points.length; i++) {
    let angle = map(noise(points[i].x * 0.001, points[i].y * 0.001, frameCount*0.00001),0,1,0,600)
    points[i].add(createVector(sin(angle), cos(angle)));
    // if(points[i].x > width) points[i].x = 0;
    // if(points[i].x < 0) points[i].x = width;
    // if(points[i].y > height*1.2) points[i].y = 0;
    // if(points[i].y < -height*0.2) points[i].y = height;

    stroke(109, 20, 74);
    strokeWeight(3);
    curve(0, 0, points[i-2].x, points[i-2].y, 
      points[i].x, points[i].y, points[i-1].x, points[i-1].y);
  }
}