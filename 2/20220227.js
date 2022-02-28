let size = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
  frameRate(12);
}

function draw() {
  for(let i = 0; i < width; i+=size){
    for(let j =0; j < height; j+=size){
      draw_quad(i,j,size);
    }
  }
}

function draw_quad(x, y, size) {
  noFill();
  stroke(200);
  rect(x,y,size)
  for(let i = 1; i < 10; i++){
    stroke(random(255), random(100), random(200));
    strokeWeight(random(4));
    size -= i*2
    circle(x,y,size)

  }
}