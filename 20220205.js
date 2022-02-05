var start_x, start_y;
var goal_x, goal_y;
var x, y, r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  start_x = random(width);
  start_y = random(height);
  goal_x = random(width);
  goal_y = random(height);
  x = start_x;
  y = start_y;
  r = width / 15
}

function draw() {

  background(82,185,200);

  noFill();
  strokeWeight(5);
  stroke(194, 230, 250);
  circle(start_x, start_y, r);
  stroke(0, 141, 183);
  circle(goal_x, goal_y, r);

  var d = dist(goal_x, goal_y, x, y);
  var vx = (goal_x - x) / d * 2;
  var vy = (goal_y - y) / d * 2;

  if(d < 1) {
    start_x = goal_x;
    start_y = goal_y;
    x = goal_x;
    y = goal_y;
    goal_x = random(width);
    goal_y = random(height);
  } else {
    x += vx;
    y += vy;
  }

  fill(234,85,4)
  noStroke()
  circle(x, y, r);

}