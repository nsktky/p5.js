let x, y, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255));
  angleMode(DEGREES);
  radius = min(width, height) * 0.3
  blendMode(DIFFERENCE)
}

function draw() {
  // background(200)
  translate(width / 2, height / 2);
  beginShape();
  for(let i = 0; i < 360; i++) {
    x = radius * sin(i * frameCount*0.1);
    y = radius * sin(i * frameCount);
    let c = map(noise(x*0.1, y*0.1, frameCount*0.0001), 0, 1, 20, 255);
    fill(c, c * 0.5, 0);
    vertex(x, y);
  }
  endShape(CLOSE);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}