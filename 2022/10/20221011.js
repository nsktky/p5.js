let points = [];
let grid, angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  angleMode(DEGREES);
  // noStroke();
  // noFill()

  grid = width / 30;
  for (let y = 0; y <= height + grid; y += grid) {
    for (let x = 0; x <= width + grid; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  angle = 0;
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    push();
    translate(points[i].x, points[i].y);
    angle = map(noise(points[i].x, points[i].y, frameCount*0.01),0,1,0,360)
    fill(255)
    circle((sin(angle) * grid) * 0.5, (cos(angle) * grid), grid * 0.5);
    fill(0)
    circle((sin(angle*1.05) * grid) *0.5, (cos(angle*1.05) * grid), grid * 0.16)
    pop();
  }
}
