let x, y, radius, seed;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(20)
  // angleMode(DEGREES)
  radius = width * 0.3
  noFill()
  seed = random(1000000000000000);
}

function draw() {
  randomSeed(seed)
  background(20)
  for(let i = 0; i < 10; i++) {
    move(random(width), random(height))
  }

}

function move(px, py) {
  push();
  translate(px, py);
  beginShape()
  for(let i = 0; i < 360; i++) {
    // circle(random(-width,width), random(-height,height), random(10));
    let xoff = map(sin(i), -1, 1, 0, 1)
    let yoff = map(cos(i), -1, 1, 0, 1)
    let angle = map(noise(xoff, yoff, frameCount*0.1), 0,1,0,360)

    x = radius * 0.15 * (sin(angle) + cos(i))
    y = radius * 0.15 * (sin(i) - tan(frameCount*0.01 + px - py))
    stroke(200)
    vertex(x, y)
    
  }
  endShape(CLOSE)
  pop();
}