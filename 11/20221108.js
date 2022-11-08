let step;
let ys = [];
let colorPalette = ["#f2935805", "#f3bb7905", "#edd6a705", "#81420005", "#93855a05", "#80c19f05"]
let colorChanged = false;
let seed
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#3c0f07");
  rectMode(CENTER);
  noStroke();
  step = width / 20;

  for(let i = 0; i < width + step; i += step) {
    ys[i] = random(0, height)
  }

  seed = random(10000000000000)
}

function draw() {
  randomSeed(seed);
  for(let i = 0; i < width + step; i += step) {
    if(!colorChanged){
      curtain(i, ys[i], colorPalette[int(random(6))]);
    } else {
      curtain(i, ys[i], colorPalette[int(random(6))]);
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