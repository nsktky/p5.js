let count;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230, 230, 20);
  angleMode(DEGREES);
  count = 1;
  noStroke();
}

function draw() {
  for(let i = 0; i < count; i++){
    let x = map(noise(i), 0, 1, width*0.2, width*0.8);
    let y = map(i, count, 0, 0, height);
    fill(30, 0, 20, 10);
    circle(x, y, 10);
    fill(60, 30, 50, 10);
    circle(x+random(10), y+random(10), 10);
  }
  count += 1
}