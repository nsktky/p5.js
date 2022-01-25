var x = 0;
var y = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
  }

  function draw() {
    for (let i = 0; i < 1000; i++) {
        draw_point();
        next_point();
    }
  }

  function draw_point () {
      var px = map(x, -2.1820, 2.6558, 0, width);
      var py = map(y, 0, 9.9983, height, 0);
      point(px, py);
  }

  function next_point() {
      var next_x;
      var next_y;
      var r = random(1);

      if (r < 0.01) {
        stroke(175, 175, 176, 10);
        next_x = 0;
        next_y = 0.16 * y;
      } else if (r < 0.86) {
        stroke(206, 209, 211, 10);
        next_x = 0.85 * x + 0.04 * y;
        next_y = -0.04 * x + 0.85 * y + 1.6;
      } else if (r < 0.93) {
        stroke(201, 201, 196, 10);
        next_x = 0.2 * x + -0.26 * y;
        next_y = 0.23 * x + 0.22 * y + 1.6;
      } else {
        stroke(97, 95, 98, 10);
        next_x = -0.15 * x + 0.28 * y;
        next_y = 0.26 * x + 0.24 * y + 0.44;
      }
      x = next_x;
      y = next_y;
  }