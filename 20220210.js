var right_col = ["#AFEEEE", "#DC143C", "#F0FFFF"];
var left_col = ["#20B2AA", "#FFD700", "#8B4513"];
var i = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var back_color = map(noise(i), 0, 1, 0, 255);
  background(back_color);
  for (let i = 0; i <= width; i++) {
    var mycolor = lerpColor(color(right_col[0]), color(left_col[0]), i / width);
    stroke(mycolor);
    line(i, 0, i, height/3);

    mycolor = lerpColor(color(right_col[1]), color(left_col[1]), i / width);
    stroke(mycolor);
    line(i, height/3, i, 2*height/3);

    mycolor = lerpColor(color(right_col[2]), color(left_col[2]), i / width);
    stroke(mycolor);
    line(i, 2*height/3, i, height);

  }

  i += 0.01;
}