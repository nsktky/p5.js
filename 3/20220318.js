function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(58, 73, 157, 1);

  translate(width / 2, height / 2);
  strokeWeight(3);
  stroke(0, 137,105);
  overlay();

  let a = map(cos(frameCount*0.001), -1, 1, -5, 5);
  let s = map(sin(frameCount*0.001), -1, 1, -2, 2);

  rotate(a);
  scale(s);

  strokeWeight(2);
  stroke(35, 157, 218);
  overlay();
}

function overlay() {
  let w = width;
  let h = height - 100;

    for (let i = -w / 2; i < w / 2; i += 10) {
      line(i, -h / 2, i, h / 2);
    }
  }