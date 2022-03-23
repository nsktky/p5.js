let font;
function preload() {
  font = loadFont("FredokaOne-Regular.ttf");
}

let x = 0;
let y = 0;
let stepSize = 5.0;

let letters = 'Gate, Gate, Paragate, Parasamgate, Bodhi Svaha!';
let fontSizeMin = 10;

let counter = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(149, 162, 169);

  x = mouseX;
  y = mouseY;

  textFont(font);
  textAlign(LEFT);
  fill(217, 233, 229);
}

function draw() {
  let d = dist(x, y, mouseX, mouseY);
  textSize(fontSizeMin + d / 2);
  let newLetter = letters.charAt(counter);
  stepSize = textWidth(newLetter);

  if (d > stepSize) {
    let angle = atan2(mouseY - y, mouseX - x);

    push();
    translate(x, y);
    rotate(angle);
    text(newLetter, 0, 0);
    pop();

    counter++;
    if (counter >= letters.length) counter = 0;

    x = x + cos(angle) * stepSize;
    y = y + sin(angle) * stepSize;
  }
}