let grid1 = [];
let grid2 = [];
let grid3 = [];
let r1, r2, r3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  angleMode(DEGREES);
  r1 = width / 5;
  r2 = width / 25;
  r3 = width / 50;

  for(let y = 0; y < height; y+=r1) {
    for(let x = 0; x < width; x+=r1) {
      let p = createVector(x, y);
      grid1.push(p);
      rect(x, y, r1);
    }
  }

  for(let y = 0; y < height; y+=r2) {
    for(let x = 0; x < width; x+=r2) {
      let p = createVector(x, y);
      grid2.push(p)
      rect(x, y, r2);
    }
  }

  for(let y = 0; y < height; y+=r3) {
    for(let x = 0; x < width; x+=r3) {
      let p = createVector(x, y);
      grid3.push(p)
      rect(x, y, r3);
    }
  }
  noFill();
  noStroke();
}

function draw() {
  stroke(0, 10)
  for(let i = 0; i < grid1.length; i++) {
    let angle = map(noise(grid1[i].x, grid1[i].y, frameCount), 0, 1, 0, 600);
    grid1[i].add(createVector(sin(angle), cos(angle)));
    fill(angle, 0, 0, 1)
    rect(grid1[i].x, grid1[i].y, r1);
  }

  for(let i = 0; i < grid2.length; i++) {
    let angle = map(noise(grid2[i].x, grid2[i].y, frameCount), 0, 1, 0, 600);
    grid2[i].add(createVector(sin(angle), cos(angle)));
    fill(0, angle, 0, 1)
    rect(grid2[i].x, grid2[i].y, r2);
  }

  for(let i = 0; i < grid3.length; i++) {
    let angle = map(noise(grid3[i].x, grid3[i].y, frameCount), 0, 1, 0, 600);
    grid3[i].add(createVector(sin(angle), cos(angle)));
    fill(0, 0, angle, 1)
    rect(grid3[i].x, grid3[i].y, r3);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}