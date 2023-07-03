let gridSize = 10;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  for(let x = 0; x < width; x += gridSize){
    for(let y = 0; y < height; y += gridSize){
      let c = random(255)
      let p = createVector(x, y, c)
      points.push(p);
    }
  }
  angleMode(DEGREES);
}

function draw() {
  for(let i = 0; i < points.length; i++){
    let angle = map(noise(frameCount*0.01, i, points[i].x), 0, 1, 0, 360)
    points[i].z += map(sin(angle)*cos(angle), -1, 1, -20, 20)
    if(points[i].z > 1000) points[i].z = 0
    if(points[i].z < -645) points[i].z = 255
    fill(points[i].z)
    rect(points[i].x, points[i].y, points[i].z * 0.01);
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20230703-2', 'png');
  }
}
