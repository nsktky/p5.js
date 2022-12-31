let points = [];
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(200);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100)

  let tileCount = 20
  grid = width / tileCount;
  for(let y = 0; y <= height; y += grid) {
    for(let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
  noStroke();
}

function draw() {
  background(200);
  for(let i = 0; i < points.length; i++){
    push();
    translate(-width/2, -height/2);
    translate(points[i].x,points[i].y);
    rotateX(frameCount*0.0001*i);
    rotateY(frameCount*0.0001*i);
    rotateZ(frameCount*0.0001*i);
    fill(map(i,0,points.length,0,360),
      40,100,50)
    box(grid*0.6);
    pop();
  }
}
