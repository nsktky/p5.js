let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255));
  noStroke();
  rectMode(CENTER);
  seed = random(100000000000);
}

function draw() {
  randomSeed(seed);
  translate(width / 2, height / 4);
  let x = frameCount * 0.1;
  let y = pow(x - width * 0.008, 2);
  if (y > height) {
    frameCount = 0;
    y = 0;
    fill(0);
    stroke(200);
    strokeWeight(5);
    circle(width * 0.005 * x, y, width * 0.06);
    circle(width * -0.005 * x, y, width * 0.06);
  } else {
    fill(random(255));
    noStroke();
    circle(width * 0.005 * x, y, width * 0.03);
    circle(width * -0.005 * x, y, width * 0.03);
  }
}