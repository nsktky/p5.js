var ax, ay;
var bx, by;
var cx, cy;
var dx, dy;
var x, y;
var list = [];
var c_list = ['#f0d3e5', '#ffca00', '#513061', '#f7e33e'];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ax = 0;
    ay = 0;
    bx = width;
    by = 0;
    cx = 0;
    cy = height;
    dx = width;
    dy = height;
    x = random(width);
    y = random(height);
    background(105, 111, 36);
    stroke(163, 132, 87);
    c_list = shuffle(c_list);
    point(ax, ay);
    point(bx, by);
    point(cx, cy);
    point(dx, dy);

    for (var i = 0; i < 8; i++) {
        list[i] = random(0.1, 0.6);
    }
  }

  function draw() {
    for (let i = 0; i < 300; i++) {
        point(x, y);
        var r = floor(random(4));
        if (r == 0) {
            stroke(c_list[0]);
            x = lerp(x, ax, list[0]);
            y = lerp(y, ay, list[1]);
        } else if (r == 1)  {
            stroke(c_list[1]);
            x = lerp(x, bx, list[2]);
            y = lerp(y, by, list[3]);
        } else if (r == 2) {
            stroke(c_list[2]);
            x = lerp(x, cx, list[4]);
            y = lerp(y, cy, list[5]);
        } else {
            stroke(c_list[3]);
            x = lerp(x, dx, list[6]);
            y = lerp(y, dy, list[7]);
        }
    }
  }