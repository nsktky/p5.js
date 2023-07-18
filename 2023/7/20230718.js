let grid;
let points = [];
let count = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // angleMode(DEGREES);
  grid = min(width, height) / 8;
  for(let x = 0; x <= width; x += grid) {
    for(let y = 0; y <= height; y += grid) {
      let c;
      if(count % 2 == 0){
        c = 255
        fill(c);
      } else {
        c = 0
        fill(c);
      }
      let p = createVector(x, y, c)
      points.push(p);
      rect(x, y, grid);
      count += 1
    }
  }
}

function draw() {
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(frameCount*0.001, points[i].x, points[i].y), 0, 1, 0, 600)
    let p = createVector(cos(angle), sin(angle));
    points[i].add(p)
    // stroke(points[i].z, points[i].y*0.05, points[i].z*0.2, 100)
    fill(color(points[i].z, 2))
    rect(points[i].x, points[i].y, grid);
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20230718-2', 'png');
  }
}
