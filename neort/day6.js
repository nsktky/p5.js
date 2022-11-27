let radius;

function setup() {
  createCanvas(11012, 1080);
  pixelDensity(1);
  angleMode(DEGREES);

  stroke(255)
  noFill();
  radius = width;
}

function draw() {
  background(0);
  translate(width/2, height/2);

  for(let j = 1; j < 30; j++) {
    beginShape();
    for(let i = 0; i < 360; i++){
      let xoff = map(cos(i), -1, 1, 0, 1)
      let yoff = map(sin(i), -1, 1, 0, 0.1)
      let r = map(noise(xoff, yoff, frameCount*0.0001), 0, 1, -radius, radius + j*40)
      let x = r * cos(r)
      let y = r * sin(r)
      let a = 0.00001
      let b = 0.1
      let c = 0.001

      let newX = y - 1 - ((x - 1) * sqrt(abs(b * x - 1 - c)) / abs(x - 1))
      let newY = a - x - 1
      vertex(newX, newY)
    }
    endShape(CLOSE)
  }
}
