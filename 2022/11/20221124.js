let radius

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  noFill();
  angleMode(DEGREES);
  radius = min(width, height) / 5;
}

function draw(){
  translate(width/2, height/2);
  beginShape();
  for(let i = 0; i < 360; i++){
    let xoff = map(cos(i), -1, 1, 0, 1)
    let yoff = map(sin(i), -1, 1, 0, 1)
    let angle = map(noise(xoff, yoff, frameCount*0.008), 0, 1, 0, radius)
    let x = angle * cos(i)
    let y = angle * sin(i)
    vertex(x, y)
  }
  endShape(CLOSE)
  radius += min(width, height)*0.02
}