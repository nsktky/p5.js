let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(220);
  image(capture, 0, 0, width, height);
  capture.loadPixels();
 
  let grid = 10;
  for (let y = 0; y < capture.height; y += grid) {
    for (let x = 0; x < capture.width; x += grid) {
      let offset = ((y *capture.width) + x) * 4
      let r = capture.pixels[offset]
      let g = capture.pixels[offset + 1]
      let b = capture.pixels[offset + 2]
      let a = capture.pixels[offset + 3]
      fill(r,g,b,a*0.8)
      rect(x,y,sin(frameCount*0.01)*grid)

    }
  }
}
