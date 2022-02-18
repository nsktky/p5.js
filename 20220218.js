let timestamp_1 = 60;
let timestamp_2 = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 220, 220);
  frameRate(60)
}

function draw() {

  if (frameCount % 60 == 0) {
    fill(255);
    circle(random(width), random(height), 100);
  }
  if (frameCount % 210 == 0) {
    fill(255, 0,0);
    circle(random(width), random(height), 100);
  } 
}