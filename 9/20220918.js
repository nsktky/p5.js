let capture;
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  background(230);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  image(capture, 0, 0, width, height);
  capture.loadPixels();

  grid = 10;
  for (let y = 0; y <= capture.height; y += grid) {
    for (let x = 0; x <= capture.width; x += grid) {
      let offset = (y * capture.width + x) * 4;
      let r = capture.pixels[offset];
      let g = capture.pixels[offset + 1];
      let b = capture.pixels[offset + 2];
      if (r + b + g > 600) {
        fill(0);
        stroke(b, g, r);
        rect(x, y, random(grid * 2), random(grid * 2));
        rect(
          x + random(10),
          y + random(10),
          random(grid * 2),
          random(grid * 2)
        );
        rect(
          x - random(10),
          y - random(10),
          random(grid * 2),
          random(grid * 2)
        );
      } else {
        noStroke();
        noFill();
      }
    }
  }
}
