let radius

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255, 190, 20, 150);
  noFill();
  angleMode(DEGREES);
  radius = min(width, height) / 2;
}

function draw(){
  background(0);
  translate(width/2, height/2);

  for(let j = 1; j < 30; j++) {
    beginShape();
    for(let i = 0; i < 360; i++){
      // rotate(i+j)
      let xoff = map(sin(i), -1, 1, 0, 1)
      let yoff = map(sin(i), -1, 1, 0, 1)
      let r = map(noise(xoff, yoff, frameCount*0.001), 0, 1, 0, radius + j*2)
      let x = r * cos(i)
      let y = r * sin(i)
      let newX = x * sin(r)
      let newY = y * cos(r)
      vertex(newX, newY)
    }
    endShape(CLOSE)
  }
}