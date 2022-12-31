let radius;
let x, y, newX, newY;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(250, 50);
  colorMode(HSB, 360, 100, 100, 100);
  noFill();
  angleMode(DEGREES);
  radius = min(width, height);
}

function draw(){
  background(25, 0, 0, 1);
  translate(width/2, height/2);

  beginShape();
  for(let i = 0; i < 360; i++){
    let xoff = map(sin(i), -1, 1, 0, 1)
    let yoff = map(sin(i), -1, 1, 0, 1)
    let r = map(noise(xoff, yoff, frameCount*0.001), 0, 1, 0, 720);
    x = radius * 0.5 * cos(i)
    y = radius * 0.5 * sin(i)
    let a = 0.01
    let b = 0.1
    newX = x * sin(r / a) - cos(r / b)
    newY = y * cos(r + b) + sin(r + a)
    fill(r, 100, 10, 10)
    vertex(newX, newY)
  }
  endShape(CLOSE);
}