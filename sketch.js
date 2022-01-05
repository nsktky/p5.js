var start = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noiseDetail(2);
  }

  function draw() {
    background(200);
    noStroke();
    var indexX = 0;
    var space = width / 100;

    for(var x = 0; x < width; x += space){
      var indexY = 0;
      for(var y = 0; y < height; y += space){
        var r = noise(start, start) * 40;
        var g = noise(indexX * start, indexY + start) * 190;
        var b = noise(indexX, indexY) * 171;
        fill(r, g, b, 150);
        rect(x, y, space);
      indexY += 1
      }
      indexX += 0.01
    }
    start += 0.007;
}