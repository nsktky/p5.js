var img;

function preload() {
  img = loadImage("img20220212.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0, width, height);
}

function draw() {
  var x1 = floor(random(width));
  var y1 = 0;

  var x2 = round(x1 + random(-1, 1));
  var y2 = round(y1 + random(-30, 30));

  var w = floor(random(1, 5));
  var h = height;

  set(x2, y2, get(x1, y1, w, h));

}