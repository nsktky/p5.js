var r = 100;
var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);
  for (var i = 0; i <= width; i += r){
    var cx = i;
    for (var j = 0; j <= height; j += r){
      var cy = j;
      strokeWeight(1);
      fill(100);
      ellipse(cx, cy, r, r);
      var x = (r / 2 - 20 ) * cos(angle - PI / 2);
      var y = (r / 2 - 20 ) * sin(angle - PI / 2);
      strokeWeight(20);
      stroke(0);
      circle(cx + x, cy + y, 10);
      angle += 0.0001
    }
  }
}