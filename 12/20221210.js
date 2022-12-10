let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES)
  radius = width * 0.3

  for(let i = 0; i < 10000; i++) {
    let pointX = random(width)
    let pointY = random(height)
    let d = dist(width/2, height/2, pointX, pointY)
    if(d > radius) {
      circle(pointX, pointY, random(5))
    }
  }

  stroke(230, 200, 240, 10)
  noFill()
}

function draw() {
  translate(width/2, height/2);
  rotate(random(200))

  beginShape()
  for(let i = 0; i < 360; i++) {
    let xoff = map(sin(i), -1, 1, 0, 50)
    let yoff = map(cos(i), -1, 1, 0, 50)
    let angle = map(noise(xoff, yoff, frameCount*0.1), 0, 1, 0, 720)
    x = radius * sin(angle)
    y = radius * cos(angle)
    vertex(x, y)
  }
  endShape(CLOSE)

}