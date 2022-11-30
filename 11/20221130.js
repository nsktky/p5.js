let radius;
let seed, x, y, newX, newY;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  noFill();
  angleMode(DEGREES);
  radius = min(width, height) / 2;

  seed = random(1000000000000)
}

function draw(){
  randomSeed(seed);
  background(0, 80);
  translate(width/2, height/2);

  for(let j = 1; j < 10; j++) {
    beginShape();
    for(let i = 0; i < 360; i++){
      let xoff = map(sin(i), -1, 1, 0, 0.2)
      let yoff = map(sin(i), -1, 1, 0, 0.2)
      let r = map(noise(xoff, yoff, frameCount*0.0003), 0, 1, -radius + j, radius + j)
      x = r * cos(r)
      y = r * sin(r)
      let a = 4
      let b = 1
      let c = 3
      let d = 2
      newX = cos(a * y) + sin(b * x)
      newY = cos(c * y) + sin(d * x)
      vertex(newX * radius * 0.5, newY * radius * 0.5)
    }
    endShape(CLOSE)
  }
}