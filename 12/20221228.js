let x, y, radius, seed;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255)
  // angleMode(DEGREES)
  radius = width
  noFill()
  seed = random(1000000000000000);
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  randomSeed(seed)
  // background(10)
  for(let i = 0; i < 10; i++) {
    move(random(width), random(height), random(0.01, 0.1))
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}

function move(px, py, size) {
  push();
  translate(px, py);
  beginShape()
  for(let i = 0; i < 360; i++) {
    let xoff = map(sin(i * px), -1, 1, 0, 0.001)
    let yoff = map(cos(i * py), -1, 1, 0, 0.001)
    let angle = map(noise(xoff, yoff, frameCount*0.1), 0,1,0,720)

    x = radius * size * cos((cos(angle) - sin(angle)))
    y = radius * size * (sin(angle + px + py))
    let newX = radius * size * (sin(y) - cos(angle))
    let newY = radius * size * (cos(i))
    stroke(angle, 100, 100, 100)
    fill(angle, 100, 100, 30)
    vertex(newX, newY)   
  }
  endShape(CLOSE)
  pop();
}