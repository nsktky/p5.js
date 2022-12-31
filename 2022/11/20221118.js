let radius

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255);
  // angleMode(DEGREES);
  radius = min(width, height) / 5;

}

function draw(){
  translate(width/2, height/2);
  beginShape()
  for(let i = 0; i < 100; i++){
    angle = map(noise(frameCount * 0.001, i*0.001), 0, 1, 0, 360)
    let x = map(sin(angle), -1, 1, -radius,  radius)
    let y = map(cos(angle), -1, 1, -radius,  radius)
    vertex(x, y)
  }
  endShape(CLOSE)
}