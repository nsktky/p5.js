let points = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB, 360,100,100,100)
  background(0,0,100);
  strokeWeight(10)

  let tileCount = 20
  grid = width / tileCount;
  for(let y = 0; y <= height; y += grid){
    for(let x = 0; x <= width; x += grid){
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  for(let i = 0; i < points.length; i++){
  fill(i, 100, 100, 1)
  push();
  stroke(0, 0, 100)
  translate(points[i].x, points[i].y);
  rotate(frameCount*0.001)
  rect(0,0,grid)
  pop();
  }
}