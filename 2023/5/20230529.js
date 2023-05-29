let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background(20);
  strokeWeight(1)
  for (let i = 0; i < 500; i++) {
    let x = random(width); 
    let y = random(height);
    let angle = random(360);
    let col = color(random(170, 200), random(150, 200), 250); 
    points.push({x: x, y: y, angle: angle, color: col}); 
  }
  // blendMode(DIFFERENCE)
}

function draw() {
  // background(200, 180, 160);
  for (let point of points) {
    let x = point.x;
    let y = point.y;
    let angle = point.angle;
    let col = point.color;
    stroke(col);
    for(let j = 0; j < 5; j++){
      let len = 30*sin(frameCount*0.1);
      let endX = x + len * cos(angle);
      let endY = y + len * sin(angle);
      line(x, y, endX, endY);
      x = endX;
      y = endY;
      angle += random(20);
    }
  }
}
