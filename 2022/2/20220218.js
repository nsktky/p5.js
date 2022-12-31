function setup() {
  createCanvas(windowWidth, windowHeight);
  background(198, 155, 146);
}

function draw() {
  let r = max(width, height)/4;
  noStroke();
  if (frameCount%60==0) {
    if (frameCount%240==0) {
      fill(136, 191, 184);
      let x = random(width);
      let y = random(height)
      circle(x, y, r);
      noFill();
      strokeWeight(3)
      stroke(136, 191, 184);
      circle(x, y, r+20);
      circle(x, y, r+40)
    } else {
      fill(230, 153, 170);
      circle(random(width), random(height), r);
    }
  }
}