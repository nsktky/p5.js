var r = 100;
var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(147, 46, 68);
}

function draw() {
  for (var i = 0; i <= width; i += r){
    var cx = i;
    for (var j = 0; j <= height; j += r){
      var cy = j;
      strokeWeight(1);
      noStroke();
      fill(200, 43, 85, 30);
      ellipse(cx, cy, r, r);
      var x = (r / 2 - 20 ) * cos(angle - PI / 2);
      var y = (r / 2 - 20 ) * sin(angle - PI / 2);
      strokeWeight(20);
      stroke(233, 71, 77);
      var x_noise = map(sin(j), -1, 1, 0, 1);
      var y_noise = map(noise(sin(i)), -1, 1, 0, 1);
      circle(cx + x * x_noise, cy + y * y_noise, 10);
      angle += map(noise(sin(j)), 0, 1, 0.00001, 0.0005);
    }
  }
}