let radius

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255);
  angleMode(DEGREES);
  radius = min(width, height) / 3;

}

function draw(){
  // background(255)
  translate(width/2, height/2);
  beginShape()
  for(let i = 0; i < 360; i++){
    angle = map(noise(i, frameCount*0.005), 0, 1, 0, 360)
    let x = radius * cos(angle)
    let y = radius * sin(i)
    vertex(x, y)
  }
  endShape(CLOSE)
}