let a = 0.6;
let b = 0.8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 230, 230);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  noStroke();
  let r = min(width, height);

  let gradientFill = drawingContext.createRadialGradient(
    width / 2,
    0,
    r,
    width / 2,
    -height/3,
    r / 2
  );

  gradientFill.addColorStop(0, color(200, 230, 230));
  gradientFill.addColorStop(a, color(0, 104, 183));
  gradientFill.addColorStop(b, color(24, 68, 142));
  gradientFill.addColorStop(1, color(0, 29, 66));

  drawingContext.fillStyle = gradientFill;
  rect(width / 2,height / 2, width*2)

  a -= 0.0001
  b -= 0.0001
}