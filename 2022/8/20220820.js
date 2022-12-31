let points = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100)
  // noStroke();

  let tileCount = 10;
  grid = width / tileCount;
  for(let y = 0; y <= height; y += grid){
    for(let x = 0; x <= width; x += grid){
      let p = createVector(x, y);
      points.push(p);
      rect(x, y, grid)
    }
  }
}

function draw() {
  // background(0)

  // stroke(random(100), random(19), random(255))
  // fill(250, 190, 20, 10)
  strokeWeight(1)
  noStroke()
  // circle(random(width), random(height), frameCount)
  // rect(width/2, height/2, width/frameCount*100, random(800))

  for(let i = 0; i < points.length; i++){
    push();
    let angle = map(noise(points[i].x * 0.001, points[i].y * 0.001), 0, 1, 100, 600);
    points[i].add(createVector(sin(angle), cos(angle)));
    translate(points[i].x, points[i].y);
    rotate(frameCount*0.01)
    fill(noise(i*1)*36,100,100,100)
    // noFill()
    stroke(i,100,100,100)
    rect(0,0, grid)
    pop();
  }

}