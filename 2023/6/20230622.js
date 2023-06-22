let points = []

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(20);
  noStroke();
  // angleMode(DEGREES);
  for(let i = 0; i < 10000; i++){
    let x = random(width);
    let y = random(height);
    let z = random(1)
    let p = createVector(x, y, z);
    points.push(p)
  }
}

function draw(){
  for(let i = 0; i < points.length; i++){
    let angle = map(noise(points[i].x, points[i].y, frameCount), -1, 1, 0, 600)
    points[i].add(createVector(cos(angle), sin(angle)));
    circle(points[i].x, points[i].y, points[i].z)
  }
}


function keyPressed() {
  if (key == 's'){
    saveCanvas('20230622', 'png');
  }
}
