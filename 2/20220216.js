let x = 0;
let y = 0;
let space = 2;
let count = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(60);
}

function draw(){
  if(count == 0){
    stroke(142,139,194);
    strokeWeight(space+4);
    line(x, y, y, x);
    count += 1;
    x += space;
  } else if (count == 1) {
    stroke(200,200,200);
    strokeWeight(space);
    line(x, y, y, x);
    count += 1;
    x += space*10;
  } else {
    stroke(97, 95, 98);
    strokeWeight(space*14);
    line(x, y, y, x);
    count = 0;
    x += space;
  }

  if(x > width*2) {
    x = 0;
    background(60);
    }
}