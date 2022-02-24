let size = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(200);
  noLoop();
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
  rect(x,y,size)
  for(let i = 1; i < 20; i++){
    stroke(random(200));
    strokeWeight(random(4));
    let num = random(size/10);
    x += num
    y += num
    size -= num*2
    rect(x,y,size)

  }
}