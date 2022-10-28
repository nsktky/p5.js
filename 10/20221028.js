let points = [];
let grid;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  angleMode(DEGREES)

  grid = width / 100;
  for (let x = 0; x < width + grid; x += grid) {
    for (let y = 0; y < height + grid; y += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  seed = random(100000000000);
}

function draw() {
  // background(250, 5)
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
    stroke(angle)
    let step = random(10)
    line(0, 0, sin(frameCount*step) * grid , cos(frameCount*step) * grid)
    pop()
  }

}