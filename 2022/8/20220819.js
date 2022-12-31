let points = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  // rectMode(CENTER);
  let tileCount = 20;
  grid = width / tileCount;
  for(let y = 0; y <= height+grid; y += grid){
    for(let x = 0; x <= width+grid; x += grid){
      let p = createVector(x, y);
      points.push(p);
      rect(x, y, grid)
    }
  }
}

function draw() {
  for(let i = 0; i < points.length; i++){
    noFill()
    stroke(0,20)
    rect(points[i].x, points[i].y, sin(frameCount*0.01)*grid*0.9);
  }
}