var a,b,c;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(254, 253, 252);
  angleMode(DEGREES);

  a = random(1);
  b = random(1);
  c = random(1);
  noFill();
}

function draw(){
  translate(random(width), random(height));
  rotate(map(random(frameCount),0,1,0,360));
  r = map(noise(sin(a)),0,1,0,50);
  g = map(noise(cos(b)),0,1,51,101);
  b = map(noise(sin(c)),0,1,128,178);
  stroke(r,g,b,5);
  strokeWeight(1);

  for(let i = 0; i < 40; i++) {
    rotate(i)
    ellipse(0, 0, width, 1);
  }

  a += 0.01
  b += 0.01
  c += 0.01
}