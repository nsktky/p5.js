let grid1 = [];
let grid2 = [];
let r1, r2

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  r1 = width / 20;
  r2 = width / 20;

  for(let y = 0; y < height+r1; y+=r1) {
    for(let x = 0; x < width+r1; x+=r1) {
      let p1 = createVector(x, y);
      grid1.push(p1);
    }
  }

  for(let y = 0; y < height+r2; y+=r2) {
    for(let x = 0; x < width+r2; x+=r2) {
      let p2 = createVector(y, x);
      grid2.push(p2)
    }
  }
  noStroke();
  blendMode(DIFFERENCE);
}

function draw() {
  for(let i = 0; i < grid1.length; i++) {
    let angle = map(noise(grid1[i].x, grid1[i].y, frameCount), 0, 1, 0, 600);
    grid1[i].add(createVector(sin(angle)*10, cos(angle)));
    fill(angle)
    circle(grid1[i].x, grid1[i].y, 10);
  }

  for(let i = 0; i < grid2.length; i++) {
    let angle = map(noise(grid2[i].x, grid2[i].y, frameCount), 0, 1, 0, 600);
    grid2[i].add(createVector(sin(angle)*10, sin(angle)));
    fill(angle)
    circle(grid2[i].y, grid2[i].x, 10);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}