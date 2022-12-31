let points = [];
let grid;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  // angleMode(DEGREES)

  colorMode(HSB, 360, 100, 100, 100)

  grid = width / 3;
  for (let x = 0; x < width + grid; x += grid) {
    for (let y = 0; y < height + grid; y += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  seed = random(100000000000);
}

function draw() {
  // background(250)
  randomSeed(seed)
  for (let i = 0; i < points.length; i++) {
    push();
    let angle = map(noise(points[i].x * 0.001, points[i].y * 0.001),0,1,0,600)
    let h = map(noise(points[i].x * 0.01, points[i].y * 0.01, frameCount*0.01),0,1,0,20)
    let s = map(noise(points[i].x * 0.01, points[i].y * 0.01, frameCount*0.1),0,1,75,100)
    let b = map(noise(points[i].x * 0.01, points[i].y * 0.01, frameCount*0.03),0,1,0,100)

    points[i].add(createVector(cos(angle), sin(angle)))
    if(points[i].x < 0) points[i].x = width
    if(points[i].x > width) points[i].x = 0
    if(points[i].y < 0) points[i].y = height
    if(points[i].y > height) points[i].y = 0

    translate(points[i].x, points[i].y)
    stroke(h, s, b, 100)
    let step = random(0.001, 0.01)
    line(0, 0, sin(frameCount*step) * grid * 0.3 , cos(frameCount*step) * grid * 0.3)
    stroke(h, b, s, 100)
    line(0, 0, width / 2, height / 2)
    pop()
  }

}