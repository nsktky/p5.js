let grid = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  rectMode(CENTER);
  // angleMode(DEGREES)
}

function draw() {
  for (var i = 0; i < 400; i++) {
    let x = map(noise(cos(frameCount)*i), 0, 1, 0, width);
    let y = map(noise(sin(frameCount)*i), 0, 1, 0, height);
    fill(map(noise(x/y), 0, 1, 100, 255), 20);
    rect(x+y/3, y, random(10))
  }
}

function keyPressed() {
  if (key == 'j'){
    saveCanvas('20240101-2', 'png');
  }
}