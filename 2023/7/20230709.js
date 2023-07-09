let gridSize = 20;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 120, 100);
  rectMode(CENTER);
  noFill();
  for(let x = 0; x < width; x += gridSize){
    for(let y = 0; y < height; y += gridSize){
      let c = random(255)
      let p = createVector(x, y, c)
      points.push(p);
    }
  }
  colorMode(HSB, 360, 100, 100, 100)
  // angleMode(DEGREES);
}

function draw() {
  for(let i = 0; i < points.length; i++){
    let angle = map(noise(frameCount*0.001, i, points[i].x), 0, 1, 0, 360)
    points[i].z += map(sin(angle)*cos(angle), -1, 1, -20, 20)
    if(points[i].z > 360) points[i].z = 0
    if(points[i].z < 0) points[i].z = 360
    stroke(points[i].z, points[i].y*0.05, points[i].z*0.2, 100)
    rect(points[i].x, points[i].y, points[i].z * 0.08);
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20230709-2', 'png');
  }
}
