let points = [];
let grid;

function setup() {
  createCanvas(11012, 1080);
  pixelDensity(1);
  noFill();
  background(0);

  grid = width / 50;
  for(let y = 0; y < height + grid; y += grid) {
    for(let x = 0; x < width + grid; x += grid) {
      let p = createVector(x, y);
      points.push(p)
    }
  }
}

function draw() {
  background(0, 10)
  for(let i = 0; i < points.length; i++) {
    push();
    translate(points[i].x, points[i].y);
    let angle = map(noise(points[i].x, points[i].y, frameCount*0.01), 0, 1, 0, 360);
    let x = map(sin(angle),-1, 1, -grid*0.1, grid*0.1);
    let y = map(cos(angle),-1, 1, -grid*0.1, grid*0.1);
    noFill();
    stroke(255);
    circle(x, y, grid*0.7)
    fill(angle, 0, 0);
    noStroke();
    circle(0, 0, grid*0.1)
    pop();
  }
}