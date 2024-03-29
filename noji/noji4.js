let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(200)
  // angleMode(DEGREES)
  radius = width * 0.3
  noFill()
}

function draw() {
  background(200, 10)
  translate(width/2, height/2);
  beginShape()
  for(let i = 0; i < 360; i++) {
    fill(20, 100)
    // circle(random(-width,width), random(-height,height), random(10));
    let xoff = map(sin(i), -1, 1, 0, 0.1)
    let yoff = map(cos(i), -1, 1, 0, 0.1)
    let angle = map(noise(xoff, yoff, frameCount*0.0001), 0,1,0,360)

    x = radius * (sin(frameCount*0.01) / tan(angle))
    y = radius * (cos(angle) / sin(i))
    stroke(250,0,0)
    vertex(x, y)
    
  }
  endShape(CLOSE)
}