var img;
var size;
var x_num = 1;
var y_num = 1;

function preload() {
  img = loadImage("img20220213.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0, width, height);
}

function draw() {
  var x_size = width / x_num;
  var y_size = height / y_num;

  for(var i = 0; i < width; i += x_size) {
    for(var j = 0; j < height; j += y_size){
      image(img, i, j, x_size, y_size);
    }
  }

  if (x_num < 100) {
    x_num += x_num * x_num * 0.002
  } else {
    x_num = 1;
  }

  if (y_num < 1000) {
    y_num += y_num * y_num * 0.002
  } else {
    y_num = 1;
  }


}