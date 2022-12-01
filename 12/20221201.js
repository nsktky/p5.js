let radius;
let x, y, newX, newY;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  noFill();
  angleMode(DEGREES);
  radius = min(width, height) / 2;
}

function draw(){
  background(255);
  translate(width/2, height/2);

  for(let j = 1; j < 30; j++) {
    beginShape();
    for(let i = 0; i < 360; i++){
      let xoff = map(cos(i), -1, 1, 0, 1)
      let yoff = map(sin(i), -1, 1, 0, 1)
      let r = map(noise(xoff, yoff, frameCount*0.0005), 0, 1, -radius + j, radius + j)
      x = r * cos(r)
      y = r * sin(r)
      let a = 1
      let b = 1
      newX = sin(a * y)
      newY = cos(b * y)
      vertex(newX * radius, newY * radius)
    }
    endShape(CLOSE)
  }
}