let r;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  angleMode(DEGREES);
  noStroke()
  r = 1
}

function draw() {
  background(100);
 for(let i = 0; i < 360; i++){
     let x = map(i,0,360,width*0.1,width*0.9)
     let y = map(sin(i),-1,1,height*0.1,height*0.9)
     fill(random(255),random(100), random(100))
     circle(x,y,r)
 }
 r = frameCount*10/r
}
