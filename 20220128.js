var r = 50;
var x = 0;
var y = 0;
var space = 5;
var speed = 0.001;
var count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(140, 185, 191);
  for (var i = 0; i <= width; i += r){
  for (var j = 0; j < 50; j ++){
    draw_rect(i, y + j * 50);
    }
  }
}

function draw_rect(x, y) {
  fill(217, 204, 160);
  noStroke();
  if (this.y - (r / 2) < height) {
    rect(x, y + random(10), r - space, r - space, 10, 10);
    fill(140, 185, 191);
    circle(x, y + random(10) + 20, r - space)
  } else {
    this.y = 0;
    rect(x, y - (r / 2), r, r);
    background(140, 185, 191);
  }
  this.y += speed;
}