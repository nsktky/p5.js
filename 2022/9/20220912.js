let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  noStroke();
}

function draw() {
  // background(220);
  // image(capture, 0, 0, width, height);
  capture.loadPixels();

  let grid = 10;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let offset = (y * capture.width + x) * 4;
      let r = capture.pixels[offset]
      let g = capture.pixels[offset + 1]
      let b = capture.pixels[offset + 2]
      fill(r, g, b);
      circle(x+frameCount, y , grid*1.5)
    }
  }
}
