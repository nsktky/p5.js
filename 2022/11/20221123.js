let radius

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255, 10)
  angleMode(DEGREES);
  radius = min(width, height);

}

function draw(){
  // background(255)
  translate(width/2, 0);
  beginShape()
  // noFill()
  fill(250, 190, 20, 10)
  for(let i = 0; i < 360; i++){
    angle = map(noise(i, frameCount*0.005), 0, 1, 0, 0.5)
    let x = radius * cos(i) * angle
    let y = radius * sin(angle*100) * angle
    vertex(x, y)
  }
  endShape(CLOSE)

  radius += 3
}