var a,b,c;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);

  a = random(1);
  b = random(1);
  c = random(1);
}

function draw(){
translate(width/2,height/random(1,8));
rotate(map(random(frameCount),0,1,0,360));
r = map(noise(sin(a)),0,1,105,175);
g = map(noise(cos(b)),0,1,101,171);
b = map(noise(sin(c)),0,1,77,147);
stroke(r,g,b,30);
noFill();
ellipse(0, 0, max(width, height), min(width, height)/2);

a += 0.01
b += 0.01
c += 0.01
}