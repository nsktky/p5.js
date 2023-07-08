let gridSize = 20;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  noFill();
  for(let x = 0; x < width; x += gridSize){
    for(let y = 0; y < height; y += gridSize){
      let c = random(255)
      let p = createVector(x, y, c)
      points.push(p);
    }
  }
  // angleMode(DEGREES);
}

function draw() {
  for(let i = 0; i < points.length; i++){
    let angle = map(noise(frameCount*1, i, points[i].x), 0, 1, 0, 360)
    points[i].z += map(sin(angle)*cos(angle), -1, 1, -20, 20)
    if(points[i].z > 100) points[i].z = 0
    if(points[i].z < -200) points[i].z = 255
    stroke(points[i].z)
    rect(points[i].x, points[i].y, points[i].z * 0.08);
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20230708-2', 'png');
  }
}
