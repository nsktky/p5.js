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
  image(capture, 0, 0, width, height);
  capture.loadPixels();

  let grid = 50;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let offset = (y * capture.width + x) * 4;
      let r = capture.pixels[offset]
      let g = capture.pixels[offset + 1]
      let b = capture.pixels[offset + 2]
      fill(r,g,b, 100);
      stroke(b*1.2, r*1.2, g*1.2)
      circle(x, y, grid*2*sin(frameCount*0.005))
    }
  }
}
