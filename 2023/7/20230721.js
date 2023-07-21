let grid;
let points = [];
let count = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  angleMode(DEGREES);
  noStroke();
  // rectMode(CENTER);
  grid = width / 50;
  for(let y = 0; y < height + grid; y += grid*3) {
    for(let x = 0; x <= width + grid; x += grid) {
      let c;
      if(count % 2 == 0){
        c = 255
        fill(c);
      } else {
        c = 0
        fill(c);
      }
      let p = createVector(x * random(), y, c)
      points.push(p);
      rect(x, y, grid);
      count += 1
    }
  }
}

function draw() {
  for(let i = 0; i < points.length; i++) {
    let angle = map(sin(frameCount), -1, 1, 0, 360)
    let p = createVector(cos(angle), sin(angle));
    points[i].add(p)
    fill(color(points[i].z))
    rect(points[i].x, points[i].y, grid*1.1);
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20230721-2', 'png');
  }
}
