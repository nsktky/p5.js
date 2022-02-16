var points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 15; i++) {
      points[i] = createVector(random(width), random(height));
  }
  noLoop();
}

function draw() {
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
        var distances = [];
        for (var i = 0; i < points.length; i++) {
            var v = points[i];
            let d = dist(x, y, v.x, v.y)
            distances[i] = d;
        }
        var sorted = sort(distances);
        var c = map(sorted[0], 0, 255, 0, 255);
        var index = (x + y * width) * 4;
        pixels[index + 3] = c;
     }
  }
  updatePixels();
}