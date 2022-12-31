let count;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  // angleMode(DEGREES);
  noStroke();
  count = 1;
}

function draw() {
  fill(0, 100)
  for(let i = 0; i <count; i++){
    let x = map(cos(i), -1, 1, 0, width);
    let y = map(i, 0, count, 0, height);
    rect(x, y, 3);
  }
  count += 0.5;
}