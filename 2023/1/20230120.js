let grid1 = [];
let grid2 = [];
let grid3 = [];
let r1, r2, r3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER)
  // angleMode(DEGREES);
  r1 = width / 2;
  r2 = width / 4;
  r3 = width / 6;

  for(let y = 0; y < height+r1; y+=r1) {
    for(let x = 0; x < width+r1; x+=r1) {
      let p = createVector(x, y);
      grid1.push(p);
    }
  }

  for(let y = 0; y < height+r2; y+=r2) {
    for(let x = 0; x < width+r2; x+=r2) {
      let p = createVector(x, y);
      grid2.push(p)
    }
  }

  for(let y = 0; y < height+r3; y+=r3) {
    for(let x = 0; x < width+r3; x+=r3) {
      let p = createVector(x, y);
      grid3.push(p)
    }
  }
  blendMode(DIFFERENCE);
  stroke(250, 190, 20)
}

function draw() {
  // background(255)
  // translate(width / 2, height / 2);
  // rotate(frameCount*0.01)
  for(let i = 0; i < grid1.length; i++) {
    let c = map(noise(grid1[i].x, grid1[i].y, frameCount*0.01), 0, 1, 0, 50);
    push()
    translate(grid1[i].x, grid1[i].y)
    rotate(frameCount*0.01)
    fill(c, 10)
    rect(0, 0, r1)
    pop()  }

  for(let i = 0; i < grid2.length; i++) {
    let c = map(noise(grid2[i].x, grid2[i].y, frameCount*0.01), 0, 1, 0, 155);
    push()
    translate(grid2[i].x, grid2[i].y)
    rotate(frameCount*0.005)
    fill(0, c, 0, 10)
    rect(0, 0, r2)
    pop()
  }

  for(let i = 0; i < grid3.length; i++) {
    let c = map(noise(grid3[i].x, grid3[i].y, frameCount*0.01), 0, 1, 0, 255);
    push()
    translate(grid3[i].x, grid3[i].y)
    rotate(frameCount*0.001)
    fill(0, c, 0, 10)
    rect(0, 0, r3)
    pop()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}