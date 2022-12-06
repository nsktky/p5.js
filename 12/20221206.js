let radius;
let x, y, newX, newY;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  colorMode(HSB, 360, 100, 100, 100);
  noFill();
  angleMode(DEGREES);
  radius = min(width, height);
}

function draw(){
  background(255, 0, 100, 1);
  translate(width/2, height/2);

  beginShape();
  for(let i = 0; i < 360; i++){
    let xoff = map(sin(i), -1, 1, 0, 1)
    let yoff = map(sin(i), -1, 1, 0, 1)
    let r = map(noise(xoff, yoff, frameCount*0.001), 0, 1, 0, 720);
    x = radius * 0.5 * cos(r)
    y = radius * 0.5 * sin(i)
    let a = 0.01
    let b = 0.1
    newX = x + sin(r / a) + cos(r / b)
    newY = y * cos(r / b) + sin(r / a)
    stroke(r, 100, 100)
    fill(r, 100, 100, 2)
    vertex(newX, newY)
  }
  endShape(CLOSE);
}