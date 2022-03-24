let font;
function preload() {
  font = loadFont("FredokaOne-Regular.ttf");
}

let x, y;
let stepSize = 1;

let letters = 'Gate, Gate, Paragate, Parasamgate, Bodhi Svaha! ';
let fontSizeMin = 10;

let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(147, 46, 68);
  angleMode(DEGREES);

  x = width / 2;
  y = height / 2;

  textFont(font);
  textAlign(CENTER);

  fill(233, 84, 100, 200);
  stroke(100, 43, 85);
  strokeWeight(2);
}

function draw() {
  let d = random(10, 100);
  textSize(fontSizeMin + d);
  let newLetter = letters.charAt(counter);
  stepSize = textWidth(newLetter);

  if (d > stepSize) {
    let angle = random(-1, 1);

    push();
    translate(x, y);
    rotate(angle);
    text(newLetter, 0, 0);
    pop();

    counter++;
    if (counter >= letters.length) counter = 0;

    x = x + cos(frameCount) * stepSize;
    y = y + sin(frameCount) * stepSize;

    if (x > width) x = 0;
    if (x < 0) x = width;
    if (y < 0) y = height;
    if (y > height) y = 0;
  }
}