let points = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  noStroke();
  grid = width / 30;
  for(let y = 0; y < height+grid; y+=grid) {
    for(let x = 0; x < width+grid; x+=grid) {
      let p = createVector(x, y)
      points.push(p);
    }
  }
}

function draw() {
  // background(200)
  for(let i = 0; i < points.length; i++) {
    push();
    drawShape(points[i].x, points[i].y, grid*0.5);
  
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawShape(x, y, l) {
  let c = map(noise(x, y, frameCount*0.007), 0, 1, 0, 255)
  fill(c)
  beginShape();
  vertex(x-l, y-l);
  vertex(x+l, y-l);
  vertex(x-l, y+l);
  endShape(CLOSE);

  fill(c*0.4)
  beginShape();
  vertex(x-l, y+l);
  vertex(x+l, y+l);
  vertex(x+l, y-l);
  endShape(CLOSE);
}