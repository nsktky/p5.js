var j = 0;
var size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(20);
  size =  min(width, height);
}

function draw() {
  background("#8e004010");
  noFill();

  translate(width / 2, height / 2);
  draw_circle("#f2d3a180", random(1), random(1));
  draw_circle("#d57fb180", random(1), random(1));
  draw_circle("#9c5b85aa", random(1), random(1));

}

function draw_circle(col, px, py) {
  stroke(col);
  beginShape();
  for(var i = 0; i < 360; i++){
    var rad = map(cos(i * j * 0.3) * size / 7, -1, 1, size * 2, size);
    var x = sin(i) * rad;
    var y = cos(i) * rad;
    vertex(x * px, y * py);
  }
  endShape(CLOSE);

  j += 1
}