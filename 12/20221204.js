let radius;
let x, y, newX, newY;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(250);
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
    let r = map(noise(xoff, yoff, frameCount*0.001), 0, 1, 0, 360)
    let s = map(noise(xoff, frameCount*0.01), 0, 1, 0, 100)
    let b = map(noise(yoff, frameCount*0.01), 0, 1, 0, 100)
    x = radius * 0.5 * cos(i)
    y = radius * 0.5 * sin(i)
    newX = x * sin(r) - cos(r)
    newY = y * cos(r) + sin(r)
    fill(r, s, b, 100)
    vertex(newX, newY)
  }
  endShape(CLOSE);
}