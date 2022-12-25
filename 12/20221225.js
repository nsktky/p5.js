let x, y, radius, seed;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(20)
  angleMode(DEGREES)
  radius = width
  noFill()
  seed = random(1000000000000000);
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  randomSeed(seed)
  // background(10, 1)
  for(let i = 0; i < 10; i++) {
    move(random(width), random(height), random(0.01, 0.3))
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function move(px, py, size) {
  push();
  translate(px, py);
  beginShape()
  for(let i = 0; i < 60; i++) {
    // circle(random(-width,width), random(-height,height), random(10));
    let xoff = map(sin(i * px), -1, 1, 0, 0.1)
    let yoff = map(cos(i * py), -1, 1, 0, 0.1)
    let angle = map(noise(xoff, yoff, frameCount*0.003), 0,1,0,360)

    x = radius * size * (tan(i))
    y = radius * size * (cos(i) - tan(frameCount*0.2 + px - py))
    stroke(angle,0,100,100)
    fill(angle,100, 100, 10)
    vertex(x, y)
    
  }
  endShape(CLOSE)
  pop();
}