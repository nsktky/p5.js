let radius;
let x, y, newX, newY;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(25);
  stroke(250);
  noFill();
  angleMode(DEGREES);
  radius = min(width, height) / 2;
}

function draw(){
  background(25);
  translate(width/2, height/2);

  for(let j = 1; j < 30; j++) {
    beginShape();
    for(let i = 0; i < 360; i++){
      let xoff = map(cos(i), -1, 1, 0, 3)
      let yoff = map(sin(i), -1, 1, 0, 3)
      let r = map(noise(xoff, yoff, frameCount*0.0005), 0, 1, -radius + j, radius + j)
      x = radius * cos(r)
      y = radius * sin(r)
      let a = 0.1
      let b = 0.1
      newX = sin(a * x)
      newY = cos(b * y)
      vertex(newX * radius, newY * radius)
    }
    endShape(CLOSE)
  }
}