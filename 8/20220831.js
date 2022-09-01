function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(20);
  rectMode(CENTER);
}

function draw() {
  background(20);
  for (let i = 1; i < 4; i++) {
    rotateX(frameCount * 0.001 * i);
    rotateY(frameCount * 0.002 * i);
    rotateZ(frameCount * 0.004 * i);
    // fill(map(i,1,3,0,250),10)
    noFill();
    stroke(207, 91, 157);
    box((i - 0.7) * min(width, height) * 0.2);
  }
}
