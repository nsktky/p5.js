let grid;
let points = [];
let mult = 0.002;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(22, 20, 30);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100)
  // angleMode(DEGREES);
  grid = min(width, height) / 100

  for(let x = 0; x < width + grid; x+=grid) {
    for(let y = 0; y < height + grid; y+=grid) {
      let z = random()
      let p = createVector(random(width), random(height), z)
      points.push(p);
    }
  }
}

function draw() {
  background(0, 2)
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, 3000);
    let x = sin(angle);
    let y = cos(angle);
    points[i].add(createVector(x, y));

    if(points[i].x > width) points[i].x = random(width);
    if(points[i].x < 0) points[i].x = random(width);
    if(points[i].y > height) points[i].y = random(height);
    if(points[i].y > height) points[i].y = random(height);

    fill(angle*0.2, 30, 100);
    circle(points[i].x, points[i].y, 1);
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20231205-2', 'png');
  }
}