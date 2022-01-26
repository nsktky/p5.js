var x = 0;
var y = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(20, 20, 20);
    var a = random(1);
    var b = 1 - a;
    var c = 1- b;
  }

  function draw() {
    for (let i = 0; i < 1000; i++) {
        draw_point();
        next_point();
    }
  }

  function draw_point () {
    strokeWeight(20)
      var px = map(x, -2.1820, 2.6558, 0, width);
      var py = map(y, 0, 9.9983, height, 0);
      point(px, py);
  }

  function next_point() {
      var next_x;
      var next_y;
      var r = random(1);

      if (r < 0.7) {
        stroke(175, 175, 176, 10);
        next_x = 0;
        next_y = random(1) * y;
      } else if (r < 0.86) {
        stroke(206, 209, 211, 10);
        next_x = random(1) * x + random(1) * y;
        next_y = -random(1) * x + random(1) * y + random(2);
      } else if (r < 0.93) {
        stroke(201, 201, 196, 10);
        next_x = random(1) * x + -random(1) * y;
        next_y = random(1) * x + random(1) * y + random(2);
      } else {
        stroke(97, 95, 98, 10);
        next_x = -random(1) * x + random(1) * y;
        next_y = random(1) * x + random(1) * y + random(1);
      }
      x = next_x;
      y = next_y;
  }