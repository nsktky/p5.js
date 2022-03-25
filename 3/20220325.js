let font;
function preload() {
  font = loadFont("FredokaOne-Regular.ttf");
}

let x, y;
let stepSize;
let letters = 'Gate, Gate, Paragate, Parasamgate, Bodhi Svaha! ';
let fontSize;
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(228, 142, 0);
  angleMode(DEGREES);
  x = 0;
  y = 0;
  stepSize = int(random(10, 60));
  fontSize = int(random(50, 200));

  textFont(font);
  textAlign(CENTER);

  fill(250, 191, 19, 200);
  stroke(247, 220, 141);
  strokeWeight(4);
}

function draw() {
  textSize(fontSize);
  let newLetter = letters.charAt(counter);


    if (x < width) {
      x += stepSize;
    } else {
      x = 0;
      y += stepSize
    }

    if (y > height) {
      x = 0;
      y = 0;
    }

    push();
    translate(x, y);
    text(newLetter, 0, 0);
    pop();

    counter++;
    if (counter >= letters.length) counter = 0;
}