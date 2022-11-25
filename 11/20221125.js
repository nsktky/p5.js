let radius

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  noFill();
  angleMode(DEGREES);
  radius = min(width, height) / 5;
}

function draw(){
  background(255);
  translate(width/2, height/2);
  for(let j = 1; j < 30; j++) {
    beginShape();
    for(let i = 0; i < 360; i++){
      let xoff = map(sin(i), -1, 1, 0, 3)
      let yoff = map(sin(i), -1, 1, 0, 3)
      let r = map(noise(xoff, yoff, frameCount*0.001), 0, 1, 0, radius + j*20)
      let x = r * cos(i)
      let y = r * sin(i)
      vertex(x, y)
    }
    endShape(CLOSE)
  }
  // radius += min(width, height)*0.02
}