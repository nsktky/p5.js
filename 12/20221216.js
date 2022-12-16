let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(25);
  noFill()
  radius = width * 0.04
  // strokeWeight(1)
}

function draw() {
  background(25, 1)
  translate(width/2, height/2)
  beginShape()
  for(let i = 0; i < 360; i++){
    // rotate(sin(frameCount))
    fill(255)
    // circle(random(-width, width),random(-height, height), random(40))
    x = radius * (sin(i + frameCount*0.001) - tan(frameCount*0.1))
    y = radius * (tan(i * frameCount*0.001) * sin(frameCount*0.01))
    fill(200, 190, 220)
    stroke(200, 255, 200)
    vertex(x, y)
  }
  endShape(CLOSE)
}
