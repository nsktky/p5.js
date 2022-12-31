var r = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = min(width / 2, height / 2);
  background(0);
  noStroke();
  fill(0);
  circle(width / 2, height / 2, r);
}

function draw() {
  for (var i = 0; i < 200; i++) {
    draw_circle();
  }
}

function draw_circle() {
  var point_x = random(width);
  var point_y = random(width);
  var dis = dist(width / 2, height / 2, point_x, point_y);

  if (dis < r / 2) {
    var col = noise(tan(frameCount));
      if (col < 0.25) {
        stroke(178, 135, 86);
        point(point_x, point_y);
      } else if (col < 0.5) {
        stroke(233, 195, 183);
        point(point_x, point_y);
      } else if (col < 0.75) {
        stroke(165, 156, 146);
        point(point_x, point_y);
      } else {
        stroke(178, 135, 86);
        point(point_x, point_y);
      }
  } else {
    stroke(97, 93, 85);
    point(point_x, point_y);
  }
}