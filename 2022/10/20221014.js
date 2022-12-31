function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  for (let i = 0; i < 100; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(frameCount * 100);
    stroke(250, 190, 20, 30);
    fill(random(100), random(60), random(200), 20);
    rect(random(width), random(height), random(width * 0.2));
    pop();
    stroke(250, 190, 20, 10);
    fill(random(150), random(180), random(255), 20);
    circle(random(width), height / 2, random(width * 0.1));
  }
}
