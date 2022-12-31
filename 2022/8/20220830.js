let angles = [];
let radius, tileCount;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  angleMode(DEGREES);
  radius = 1;
  tileCount = width / radius;
  for(let i = 0; i < tileCount; i++) {
    angles[i] = map(i,0,tileCount,0,360);
  }
}

function draw() {
  for(let i = 0; i < angles.length; i++){
    let x = map(i,0,angles.length,0,width);
    let y = map(cos(angles[i]),-1,1,0,height);
    stroke(250);
    line(x, y, x, y + noise(i)*frameCount*0.5);
  }
}
