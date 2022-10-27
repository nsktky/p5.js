let points = [];
let grid;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  // angleMode(DEGREES)

  grid = width / 50;
  for (let x = 0; x < width + grid; x += grid) {
    for (let y = 0; y < height + grid; y += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  seed = random(100000000000);
}

function draw() {
  background(250, 5)
  randomSeed(seed)
  for (let i = 0; i < points.length; i++) {
    push();
    translate(points[i].x, points[i].y)
    let c = map(noise(points[i].x, points[i].y, frameCount*0.01), 0, 1, 0, 360);
    stroke(c)
    let step = random(10)
    line(0, 0, sin(frameCount*step) * grid * 0.5, cos(frameCount*step) * grid * 0.5)
    pop()
  }

}