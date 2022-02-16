var x, y, size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  size = width / 50;
  frameRate(1);
  background(200);
}

function draw() {

  noStroke();
  w = size / 5;
  h = size;

  for (var i = 0; i < width; i += size + 20){
    for(var j = 0; j < height; j+= size + 20){
      var k = int(random(5));
      if (k == 0) {
        fill(114, 126, 154)
        rect(i, j, size + 20, size + 20);
        obana_no_tuyu(i, j, w, h);
      } else if (k == 1) {
        fill(149, 91, 53)
        rect(i, j, size + 20, size + 20);
        koto_no_ne(i, j, w, h);
      } else if (k == 2) {
        fill(161, 168, 156)
        rect(i, j, size + 20, size + 20);
        kohou_no_yuki(i, j, w, h);
      } else if (k == 3) {
        fill(223, 130, 147)
        rect(i, j, size + 20, size + 20);
        rinka_no_ume(i, j, w, h);
      } else {
        fill(0, 149, 128)
        rect(i, j, size + 20, size + 20);
        ryokuzyu_no_hayashi(i, j, w, h);
      }
    }
  }
}

function obana_no_tuyu(x, y, w, h) {
  fill(185, 157, 185);
  x = x + 10
  y = y + 10
  rect(x, y, w, h);
  rect(x + w*2, y, w, h);
  rect(x + w*4, y, w, h);
  rect(x, y, h, w);
}

function koto_no_ne(x, y, w, h) {
  fill(208, 194, 183);
  x = x + 10
  y = y + 10
  rect(x, y, w, h);
  rect(x + w*2, y, w, h);
  rect(x + w*4, y, w, h);
  rect(x, y, h/2, w);
}

function kohou_no_yuki(x, y, w, h) {
  fill(214, 219, 224);
  x = x + 10
  y = y + 10
  rect(x, y, w, h);
  rect(x + w*2, y + h/2, w, h/2);
  rect(x + w*4, y, w, h);
  rect(x, y, h, w);
}

function rinka_no_ume(x, y, w, h) {
  fill(196, 42, 58);
  x = x + 10
  y = y + 10
  rect(x, y, w, h);
  rect(x + w*2, y, w, h);
  rect(x + w*4, y, w, h);
  rect(x + w*2, y, h/2, w);
}

function ryokuzyu_no_hayashi(x, y, w, h) {
  fill(170, 206, 63);
  x = x + 10
  y = y + 10
  rect(x, y, w, h);
  rect(x + w*2, y, w, h);
  rect(x + w*4, y, w, h);
}