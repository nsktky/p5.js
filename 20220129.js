var r = 50;
var x = 0;
var y = 0;
var space = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(166, 65, 128);
  for (var i = 0; i <= width; i += r){
  for (var j = 0; j < height; j += 50){
    draw_rect(i, y + j);
    }
  }
}

function draw_rect(x, y) {
  var body_random_move = random(5);
  var y_eye_random_move = random(5);
  var x_eye_random_move = map(sin(frameCount * 2),-1, 1, 0, 15);

  fill(228, 209, 192);
  stroke(86, 85, 153, 200);
  rect(x, y + body_random_move, r - space, r - space, 10, 10);

  noStroke();
  fill(166, 65, 128);
  circle(x, y + body_random_move + 20, r - space - 8)

  fill(62, 166, 178)
  stroke(86, 85, 153, 200);
  circle(x + x_eye_random_move, y - 12 + y_eye_random_move, 6);
  circle(x + x_eye_random_move - 15, y - 12 + y_eye_random_move, 6);
  ellipse(x + x_eye_random_move - 15 / 2, y - 5 + y_eye_random_move / 2, 6, 2);
}