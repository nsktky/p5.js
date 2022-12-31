var a,b,c;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(47, 38, 36);
  angleMode(DEGREES);

  a = random(1);
  b = random(1);
  c = random(1);

  translate(width / 2, 100);
  noFill();
  stroke(207, 168, 85, 10);
  strokeWeight(1);
  for(let i = 0; i < 200; i++) {
    rotate(i)
    rect(0, 0, width);
  }
}

function draw(){
translate(width/2,height/random(1,10));
rotate(map(random(frameCount),0,1,0,360));
r = map(noise(sin(a)),0,1,157,207);
g = map(noise(cos(b)),0,1,118,168);
b = map(noise(sin(c)),0,1,35,85);
stroke(r,g,b,40);
strokeWeight(1);
rect(0, 0, 50, 50);


a += 0.01
b += 0.01
c += 0.01

}