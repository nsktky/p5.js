let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background(255);
  strokeWeight(1);
  for (let i = 0; i < 50; i++) {
    let x = random(width); 
    let y = random(height);
    let angle = random(360);
    let hue = map(noise(i*7, x, y), 0, 1, 0, 255)
    let col = color(hue, 10); 
    points.push({x: x, y: y, angle: angle, color: col}); 
  }
}

function draw() {
  for (let point of points) {
    let x = point.x;
    let y = point.y;
    let angle = point.angle;
    let col = point.color;
    stroke(col);
    for(let j = 0; j < 100; j++){
      let len = 5*sin(frameCount*0.1);
      let endX = x + len * cos(angle);
      let endY = y + len * sin(angle);
      line(x, y, endX, endY);
      x = endX;
      y = endY;
      angle += random(360);
    }
  }
}
