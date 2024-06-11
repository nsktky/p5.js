let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES)
  image(capture, 0, 0, width, height);
}

function draw() {
  capture.loadPixels();
  // background(0)
  let grid = 20;
  for (let y = 0; y < capture.height; y += grid) {
    for (let x = 0; x < capture.width; x += grid) {
      let offset = ((y *capture.width) + x) * 4
      let r = capture.pixels[offset]
      let g = capture.pixels[offset + 1]
      let b = capture.pixels[offset + 2]
      let a = capture.pixels[offset + 3]
      let angle = map(noise(offset, frameCount*0.001), 0, 1, -360, 360)
      push();
      translate(x, y)
      rotate(angle)
      fill(r,g,b,100)
      rect(0, 0, grid*0.1, grid*1)
      pop();
    }
  }
}
