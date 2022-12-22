let x, y, radius, seed;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(20)
  angleMode(DEGREES)
  radius = width * 0.2
  noFill()
  seed = random(1000000000000000);
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  randomSeed(seed)
  // background(10)
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
    let xoff = map(sin(i + px), -1, 1, 0, 1)
    let yoff = map(cos(i + py), -1, 1, 0, 1)
    let angle = map(noise(xoff, yoff, frameCount*0.003), 0,1,0,360)

    x = radius * 0.15 * (sin(angle) + cos(i))
    y = radius * 0.15 * (sin(i) - tan(frameCount*0.2 + px - py))
    stroke(200)
    fill(angle, 100, 100, 1)
    vertex(x, y)
    
  }
  endShape(CLOSE)
  pop();
}