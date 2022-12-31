var a,b,c;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(163, 40, 45);
  angleMode(DEGREES);

  a = random(1);
  b = random(1);
  c = random(1);
  noFill();
}

function draw(){
  translate(random(width), height-random(100));
  rotate(map(random(frameCount),0,1,0,360));
  stroke(148,148,149,5);
  strokeWeight(1);

  for(let i = 0; i < 50; i++) {
    rotate(random(i))
    ellipse(0, 0, width, 1);
  }

  a += 0.01
  b += 0.01
  c += 0.01
}