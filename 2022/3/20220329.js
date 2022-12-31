var a,b,c;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(97, 95, 98);
  angleMode(DEGREES);

  a = random(1);
  b = random(1);
  c = random(1);
  noFill();
}

function draw(){
translate(width/2,height/random(1,10));
rotate(map(random(frameCount),0,1,0,360));
r = map(noise(sin(a)),0,1,151,201);
g = map(noise(cos(b)),0,1,151,201);
b = map(noise(sin(c)),0,1,146,196);
stroke(r,g,b,5);
strokeWeight(1);
for(let i = 0; i < 10; i++) {
  rotate(i)
  rect(0, 0, width);
}


a += 0.01
b += 0.01
c += 0.01

}