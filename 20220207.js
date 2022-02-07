var num = 15;
var x, y, vy, vy;
var ox, oy, w, h, a, b, col;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  w = width;
  h = height;
  col = 80;
  a = random(1);
  b = random(1);
  ox = width/2;
  oy = height/2;

  x = new Array(num).fill(width/2);
  y = new Array(num).fill(height/2);
  vx = new Array(num).fill(width/2);
  vy = new Array(num).fill(height/2);
}

function draw() {
  background(70);
  x[0] = ox;
  y[0] = oy;
  fill(col);
  rect(x[0], y[0], w, h);

  for(let i = 1; i < x.length; i++){
      fill(col - i * 4);
      stroke(col - i * 4);
      strokeWeight(5 - i * 0.4);
      vx[i] = int((x[i-1] - x[i]) * 0.2);
      vy[i] = int((y[i-1] - y[i]) * 0.2);
      x[i] += vx[i];
      y[i] += vy[i];
      rect(x[i], y[i], w/i*5, h/i*5);
  }

  if(ox < 0){
    ox += 2;
  } else if (ox > width) {
    ox -= 2;
  } else {
    ox += map(noise(a), 0, 1, -1, 1);
  }

  if(oy < 0){
    oy += 2;
  } else if (oy > height) {
    oy -= 2;
  } else {
    oy += map(noise(b), 0, 1, -1, 1);
  }

  a += 0.01
  b += 0.01
}