var ax, ay;
var bx, by;
var cx, cy;
var x, y;
var list = [];

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
    background(163, 132, 87);
    stroke(163, 132, 87)
    point(ax, ay);
    point(bx, by);
    point(cx, cy);

    for (var i = 0; i < 6; i++) {
        list[i] = random(0.2, 0.8);
    }
  }

  function draw() {
    for (let i = 0; i < 100; i++) {
        point(x, y);
        var r = floor(random(3));
        if (r == 0) {
            stroke(234, 222, 193)
            x = lerp(x, ax, list[0]);
            y = lerp(y, ay, list[1]);
        } else if (r == 1)  {
            stroke(214, 207, 144)
            x = lerp(x, bx, list[2]);
            y = lerp(y, by, list[3]);
        } else {
            stroke(198, 195, 160)
            x = lerp(x, cx, list[4]);
            y = lerp(y, cy, list[5]);
        }
    }
  }