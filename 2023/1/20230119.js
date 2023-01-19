let grid1 = [];
let grid2 = [];
let grid3 = [];
let r1, r2, r3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  r1 = width / 4;
  r2 = width / 8;
  r3 = width / 16;

  for(let y = 0; y < height; y+=r1) {
    for(let x = 0; x < width; x+=r1) {
      let p = createVector(x, y);
      grid1.push(p);
    }
  }

  for(let y = 0; y < height; y+=r2) {
    for(let x = 0; x < width; x+=r2) {
      let p = createVector(x, y);
      grid2.push(p)
    }
  }

  for(let y = 0; y < height; y+=r3) {
    for(let x = 0; x < width; x+=r3) {
      let p = createVector(x, y);
      grid3.push(p)
    }
  }
  noStroke();
  blendMode(DIFFERENCE);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(frameCount*5)
  for(let i = 0; i < grid1.length; i++) {
    let angle = map(noise(grid1[i].x, grid1[i].y, frameCount), 0, 1, 0, 600);
    grid1[i].add(createVector(sin(angle), cos(angle)));
    fill(angle)
    circle(grid1[i].x, grid1[i].y, r1);
  }

  for(let i = 0; i < grid2.length; i++) {
    let angle = map(noise(grid2[i].x, grid2[i].y, frameCount), 0, 1, 0, 600);
    grid2[i].add(createVector(sin(angle), cos(angle)));
    fill(angle)
    circle(grid2[i].x, grid2[i].y, r2);
  }

  for(let i = 0; i < grid3.length; i++) {
    let angle = map(noise(grid3[i].x, grid3[i].y, frameCount), 0, 1, 0, 600);
    grid3[i].add(createVector(sin(angle), cos(angle)));
    fill(angle)
    circle(grid3[i].x, grid3[i].y, r3);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}