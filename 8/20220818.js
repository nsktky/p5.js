
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20)
  noStroke()
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  translate(width/2, height/2);
  for(let i = 0; i < 10; i++){
    fill(250, 10);
    stroke(255, 100)
    rotate(i*36)
    rect(random(random(random(random(width)))), 
      random(random(random(random(height)))),
       random(10), random(100))
  }
}