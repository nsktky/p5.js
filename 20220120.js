var angle = 0;
var a = 3;
var size = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
  }

  function draw() {
    background(74, 86, 138);
    translate(width / 2, height / 2);
    rotate(angle * 0.3);
    for (var i = 0; i < angle; i++) {
        var r = a * sqrt(i);
        var x = r * cos(i * 137.5);
        var y = r * sin(i * 137.5);
        var hu = sin(angle + i * 0.5);
        r = map(hu, -1, 1, 0, 13);
        b = map(hu, -1, 1, 0, 60);
        g = map(hu, -1, 1, 0, 43);
        fill(r, b, g);
        noStroke();
        ellipse(x, y, 4, 4)
    }
    angle += 5;

    fill(255);
    ellipse(0, 0, size * 10, size * 10);
    fill(0);
    ellipse(-size, -3 * size, size, size);
    ellipse(size * 2, -3 * size, size, size);
    ellipse(size * 0, -size, 3 * size, size);
    if (size > 0) {
      size -= 0.05;
    }
  }