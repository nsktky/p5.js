let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(20)
  // angleMode(DEGREES)
  radius = width * 0.3
  strokeWeight(1)
  noFill()
}

function draw() {
  // background(20, 10)
  translate(width/2, height/2);
  beginShape()
  for(let i = 0; i < 360; i++) {
    fill(200, 100)
    // circle(random(-width,width), random(-height,height), random(10));
    let xoff = map(sin(i), -1, 1, 0, 0.1)
    let yoff = map(cos(i), -1, 1, 0, 0.1)
    let angle = map(noise(xoff, yoff, frameCount*0.1), 0,1,0,360)

    y = radius * 0.3 * (sin(frameCount*0.01) - sin(angle) - sin(i))
    x = radius * 0.3 * (cos(angle) + sin(i) + cos(frameCount*0.01))
    stroke(200,10,20)
    vertex(x, y)
    
  }
  endShape(CLOSE)
}