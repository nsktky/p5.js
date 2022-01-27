var r = 50;
var x = 0;
var y = 0;
var space = 10;
var speed = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(140, 185, 191, 10);
  for (var i = 0; i <= width; i += r){
  draw_rect(i)
  }
}

function draw_rect(x) {
  fill(217, 204, 160, 10);
  noStroke();
  if (this.y - (r / 2) < height) {
    rect(x, this.y + random(50), r - space, r - space);
  } else {
    this.y = 0;
    rect(x, this.y - (r / 2), r, r);
    background(140, 185, 191);
  }
  this.y += speed;
}