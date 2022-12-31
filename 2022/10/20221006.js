let points = [];
let grid;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)

  grid = width / 10;
  for (let y = 0; y <= height+grid; y += grid) {
    for (let x = 0; x <= width+grid; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  background(0, 3)
  for(let i = 0; i < points.length; i++) {
    strokeWeight(1)
    stroke(250, 190, 20, 10)
    let op = int(map(noise(frameCount*0.01),0,1,0,points.length))
    line(points[op].x, points[op].y, points[i].x, points[i].y)
  }
}
