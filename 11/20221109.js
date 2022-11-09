let grid;
let points = [];
let seed
let colorPalette = ["#f29358", "#f3bb79", "#edd6a7", "#814200", "#93855a", "#80c19f"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#3c0f07");
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  grid = width / 100;

  for(let x = 0; x < width + grid; x += grid) {
    for(let y = 0; y < height + grid; y += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  seed = random(100000000000);
}

function draw() {
  background("#3c0f07");
  randomSeed(seed)

  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * 0.01, points[i].y * 0.001),0,1,0,600)
    points[i].add(createVector(1, sin(angle)));
    if(points[i].x > width) {
      points[i].x = 0
    }
    curtain(points[i].x, points[i].y, colorPalette[int(random(6))])
  }
}

function curtain(x, y, c) {
  fill(c);
  rect(x, y, grid*0.7);
}