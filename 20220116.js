function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
  }

  function draw() {
    background(223, 108, 49);
    stroke(200, 29, 9);
    translate(width / 2, height)
    branch(height / 3)

  }

  function branch(len) {
    var angle = map(noise(frameCount * 0.003), 0, 1, 20, 60);
    strokeWeight(len / 1.5);
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 2) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();

        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
  }