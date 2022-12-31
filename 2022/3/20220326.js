var a,b,c;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(70, 63, 39);
  angleMode(DEGREES);

  a = random(1);
  b = random(1);
  c = random(1);
}

function draw(){
translate(width/2,height/random(1,8));
rotate(map(random(frameCount),0,1,0,360));
r = map(noise(sin(a)),0,1,100,191);
g = map(noise(cos(b)),0,1,70,120);
b = map(noise(sin(c)),0,1,70,137);
stroke(r,g,b,20);
strokeWeight(1);
noFill();
ellipse(width / 2, 0, max(width, height), min(width, height)/100);

a += 0.01
b += 0.01
c += 0.01
}