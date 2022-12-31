let size = 100;
let button;
let flag = 0;

let font;

function preload() {
  font = loadFont("FredokaOne-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(200);
  button = createButton("有給");
  button.position(width / 2, height - 50);
  button.mousePressed(rest);
  button.style('background-color', "#c8e6e6");

  textFont(font);
  textAlign(CENTER, CENTER);
}

function rest() {
  noLoop();
  background("#c8e6e6");
  flag = 1;

  let letter = "oyasumi"
  fill(255);
  stroke(0);
  strokeWeight(5);
  textSize(100);
  text(letter, width / 2, height / 2);
}

function draw() {
  switch(flag){
    case 0:
      for(let i = 0; i < width; i+=size){
        for(let j =0; j < height; j+=size){
          draw_quad(i,j,size);
        }
      }
    break;

    case 1:
      break;
  }
}

function draw_quad(x, y, size) {
  noFill();
  circle(x,y,size)
  for(let i = 1; i < 10; i++){
    stroke(random(200));
    strokeWeight(random(4));
    let num = random(size/20);
    size -= num*6
    circle(x,y,size)
  }
}