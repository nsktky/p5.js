let points = [];
let grid;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);

  grid = width / 10;
  for (let x = 0; x < width + grid; x += grid) {
    for (let y = 0; y < height + grid; y += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  seed = random(100000000000);
}

function draw() {
  randomSeed(seed)
  for (let i = 0; i < points.length; i++) {
    push();
    translate(points[i].x, points[i].y)
    if (frameCount % 2 == 0) {
      stroke(255);
    } else if (frameCount % 3 == 0) {
      stroke(0, 0, 255);
    }  else {
      stroke(255, 0, 0)
    }
    let step = random(10)
    line(0, 0, sin(frameCount*step) * grid * 0.5, cos(frameCount*step) * grid * 0.5)
    pop()
  }

}