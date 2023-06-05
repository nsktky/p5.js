let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background(0);
  strokeWeight(1);
  colorMode(HSB, 360, 100, 100, 100)
  for (let i = 0; i < 100; i++) {
    let x = random(width); 
    let y = random(height);
    let angle = random(360);
    let hue = map(noise(i*7, x, y), 0, 1, 0, 100)
    let col = color(hue, 100, 100, 2); 
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
    for(let j = 0; j < 10; j++){
      let len = 100*sin(frameCount*0.1);
      let endX = x + len * cos(angle);
      let endY = y + len * sin(angle);
      line(x, y, endX, endY);
      x = endX;
      y = endY;
      angle += random(360);
    }
  }
}
