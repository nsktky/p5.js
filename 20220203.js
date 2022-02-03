var angle = 0;

function setup() {
  createCanvas(1400, 830);
  background(23, 30, 38);
  angleMode(DEGREES);
  
  translate(width / 2, height / 2);
  
  fill(216, 227, 242);
  circle(0, 0, 100);
  
  noFill();
  stroke(216, 227, 242);
  strokeWeight(10)
  circle(0, 0, height + 10)

}

function draw() {
  translate(width / 2, height / 2);
  fill(216, 227, 242);
  
  rotate(angle);
  var r = height / 2 - height /10
  
  for(var i = 0; i < 3; i ++) {
   rotate(120)
   sord();
  }
  
  noStroke();
  
  for(var i = 0; i < 3; i++){
    circle(0, -height/3.5, r);
    rotate(120);
  }
  
  angle += 0.025
}

function sord() {
  push();
  rotate(180);
  noStroke();
  beginShape();
  vertex(0, -height / 2 +10);
  vertex(80, -height / 2 + 60);
  vertex(15, -height / 10);
  vertex(-15, -height / 10);
  vertex(-80, -height / 2 + 60);  
  endShape(CLOSE);

  fill(23, 30, 38);
  rotate(10);
  ellipse(10, -height / 3.8, 50, -height / 2.7);
  rotate(-20);
  ellipse(-10, -height / 3.8, -50, -height / 2.7);
  pop();
}