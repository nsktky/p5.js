let capture

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  // noStroke();
}

function draw() {
  background(220);
  image(capture, 0, 0, width, height);
  let col = capture.get(mouseX, mouseY);
  let newRed = red(col);
  let newGreen = green(col);
  let newBlue = blue(col);
  fill(newRed, newGreen, newBlue, 100);
  stroke(newRed*2, newGreen*2, newBlue*2)
  for(let i = 0; i < 10; i++) {
    rect(width/frameCount*100 + random(i)*10,
     height/2 + random(i)*10, random(i)*10)
  }
}