let x, y, radius, seed;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(25)
  // angleMode(DEGREES)
  radius = width
  noFill()
  seed = random(1000000000000000);
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  randomSeed(seed)
  // background(10, 100)
  for(let i = 0; i < 10; i++) {
    move(random(width), random(height), random(0.01, 0.2))
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
    let xoff = map(sin(i * px), -1, 1, 0, 1)
    let yoff = map(cos(i * py), -1, 1, 0, 1)
    let angle = map(noise(xoff, yoff, frameCount*0.001), 0,1,0,720)

    y = radius * size * (tan(i)*sin(angle + px + py))
    x = radius * size * cos((cos(angle) / tan(angle)))
    stroke(angle, 10, 100, 10)
    fill(angle, 100, 100, 1)
    vertex(x, y)   
  }
  endShape(CLOSE)
  pop();
}