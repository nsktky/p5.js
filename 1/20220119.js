var angle = 0;
var a = 3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
  }

  function draw() {
    background(0);
    translate(width / 2, height / 2);
    rotate(angle * 0.3);
    for (var i = 0; i < angle; i++) {
        var r = a * sqrt(i);
        var x = r * cos(i * 137.5);
        var y = r * sin(i * 137.5);
        fill(255);
        noStroke();
        ellipse(x, y, 4, 1)
    }
    angle += 10;
  }