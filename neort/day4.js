let points = [];
let grid;
let seed;

function setup() {
  createCanvas(11012, 1080);
  pixelDensity(1);
  background(0);
  angleMode(DEGREES)

  grid = width / 200;
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
    let angle = map(noise(points[i].x * 0.01, points[i].y * 0.01, frameCount*0.01),0,1,0,360)
    points[i].add(createVector(cos(angle), sin(angle)))
    if(points[i].x < 0) points[i].x = width
    if(points[i].x > width) points[i].x = 0
    if(points[i].y < 0) points[i].y = height
    if(points[i].y > height) points[i].y = 0

    translate(points[i].x, points[i].y)
    stroke(map(angle, 0, 360, 0, 255))
    let step = random(grid)
    line(0, 0, sin(frameCount * step) * grid , cos(frameCount * step) * grid)
    pop()
  }
}