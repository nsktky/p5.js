var ax, ay;
var bx, by;
var cx, cy;
var dx, dy;
var x, y;
var list = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ax = width / random(1, 4);
    ay = height / random(1, 4);
    bx = width / random(1, 4);
    by = height / random(1, 4);
    cx = width / random(1, 4);
    cy = height / random(1, 4);
    dx = width / random(1, 4);
    dy =height / random(1, 4);
    x = random(width);
    y = random(height);
    background(116, 89, 77);
    stroke(116, 89, 77);
    strokeWeight(20);
    point(ax, ay);
    point(bx, by);
    point(cx, cy);
    point(dx, dy);
    for (var i = 0; i < 8; i++) {
        list[i] = random(0.1, 0.6);
    }
  }

  function draw() {
    for (let i = 0; i < 20; i++) {
        point(x, y);
        var r = floor(random(4));
        if (r == 0) {
            stroke(231, 190, 147, 10);
            x = lerp(x, ax, list[0]);
            y = lerp(y, ay, list[1]);
        } else if (r == 1)  {
            stroke(242, 154, 118, 10);
            x = lerp(x, bx, list[2]);
            y = lerp(y, by, list[3]);
        } else if (r == 2) {
            stroke(169, 159, 153, 10);
            x = lerp(x, cx, list[4]);
            y = lerp(y, cy, list[5]);
        } else {
            stroke(212, 191, 144, 10);
            x = lerp(x, dx, list[6]);
            y = lerp(y, dy, list[7]);
        }
    }
  }