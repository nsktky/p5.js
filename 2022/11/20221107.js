let step;
let ys = [];
let colorChanged = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  rectMode(CENTER);
  noStroke();
  step = width / 10;

  for(let i = 0; i < width + step; i += step) {
    ys[i] = random(0, height)
  }
}

function draw() {
  for(let i = 0; i < width + step; i += step) {
    if(!colorChanged){
      curtain(i, ys[i], color(0, 10));
    } else {
      curtain(i, ys[i], color(255, 10));
    }
    ys[i] += 1;
    if(ys[i] > height) {
      ys[i] = 0
      colorChanged = !colorChanged;
    }
  }
}

function curtain(x, y, c) {
  fill(c);
  rect(x, y, step*0.7);
}