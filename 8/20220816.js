let points = [];
let angles = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();

  let tileCount = 30;
  grid = width / tileCount;
  for(let y = 0; y <= height; y += grid){
    for(let x = 0; x <= width; x += grid){
      let p = createVector(x, y);
      points.push(p);
      let angle = int(random(360));
      angles.push(angle);
    }
  }
}

function draw() {
  background(0);
  for(let i = 0; i < points.length; i++) {
    push();
    translate(points[i].x, points[i].y);
    rotate(angles[i]);
    fill(200)
    rect(0, 0, grid*0.8);
    angles[i] += frameCount/10;
    pop();
  }
}
