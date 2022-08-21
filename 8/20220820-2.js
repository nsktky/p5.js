let points = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100)

  let tileCount = 40;
  grid = width / tileCount;
  for(let y = 0; y <= height+grid; y += grid){
    for(let x = 0; x <= width+grid; x += grid){
      let p = createVector(x, y);
      points.push(p)
      fill(random(x),50,100,100)
      rect(x, y, grid)
    }
  }

}

function draw() {
  for(let i = 0; i < points.length; i++){
    let angle = map(noise(points[i].x * 0.001, points[i].y * 0.001), 0, 1, 100, 600);
    points[i].add(createVector(sin(angle), cos(angle)));
    push();
    fill(noise(i)*360, 100, 100,10)
    stroke(noise(i)*360, 100, 50,100)
    translate(points[i].x, points[i].y);
    rotate(frameCount)
    rect(0,0,grid)
    pop();
  }
}