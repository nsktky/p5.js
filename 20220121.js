var ax, ay;
var bx, by;
var cx, cy;
var x, y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ax = width / 2;
    ay = 0;
    bx = 0;
    by = height;
    cx = width;
    cy = height;
    x = random(width);
    y = random(height);
    background(230, 234, 235);
    stroke(220, 7, 127)
    point(ax, ay);
    point(bx, by);
    point(cx, cy);
  }

  function draw() {
    for (let i = 0; i < 30; i++) {
        stroke(220, 7, 127)
        point(x, y);

        var r = floor(random(3));
        if (r == 0) {
            x = lerp(x, ax, 0.5);
            y = lerp(y, ay, 0.5);
        } else if (r == 1)  {
            x = lerp(x, bx, 0.5);
            y = lerp(y, by, 0.5);
        } else {
            x = lerp(x, cx, 0.5);
            y = lerp(y, cy, 0.5);
        }
    }
  }