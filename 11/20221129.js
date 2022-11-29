let radius;
let seed;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(250, 190, 20, 20);
  noFill();
  angleMode(DEGREES);
  radius = min(width, height) / 2;

  seed = random(1000000000000)
}

function draw(){
  randomSeed(seed);
  background(0, 80);
  translate(width/2, height/2);

  for(let j = 1; j < 20; j++) {
    beginShape();
    for(let i = 0; i < 360; i++){
      let xoff = map(sin(i), -1, 1, 0, 1)
      let yoff = map(sin(i), -1, 1, 0, 1)
      let r = map(noise(xoff, yoff, frameCount*0.0003), 0, 1, -radius + j, radius + j)
      let x = r * cos(i)
      let y = r * sin(i)
      let a = 4
      let b = 1
      let c = 3
      let d = 2
      let newX = sin(a * y) + cos(b * x)
      let newY = cos(c * y) + sin(d * x)
      vertex(newX * radius * 0.5, newY * radius * 0.5)
    }
    endShape(CLOSE)
  }
}