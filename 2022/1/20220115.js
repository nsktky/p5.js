function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
  }

  function draw() {
    background(15, 87, 121);
    stroke(136, 156, 151);
    strokeWeight(3);
    for (var i = 0; i < width; i++){
        push();
        translate(i * 10, height)
        branch(height / 4)
        pop();
    }

  }

  function branch(len) {
    var angle = frameCount * 0.005;
    line(0, 0, 0, -len);
    translate(0, -len)
    rotate(angle);
    if (len > 4) {
        branch(len * 0.8)
    }
    translate()
  }