function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(200)
  for(let i = 0; i < 360; i++) {
    stroke(i, 90, 80);
    let x = map(cos(i), -1, 1, 0, width);
    let y = map(noise(sin(i)), 0, 1, 0, height);
    line(width / 2, height / 2, x, y+cos(frameCount*0.1)*100);
  }
}
