
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200)
  noStroke()
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  translate(width/2, height/2);
  fill(0)
  for(let i = 0; i < 100; i++){
    rotate(i*10)
    circle(random(random(random(random(width)))), 
      random(random(random(random(height)))), 1)
  }
}