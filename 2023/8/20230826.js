let angle = 0;
let maxOffset = 20;
let offsetStep = 2;
let angleStep

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  noFill();
  angleStep = random(2, 60)
}

function draw() {
  // background(220);

  translate(width / 2, height / 2);

  beginShape();
  for (let i = 0; i < 360; i += angleStep) {
    let rad = radians(i + angle);
    let r = map(i, 0, 360, 0, maxOffset);
    let x = r * cos(rad);
    let y = r * sin(rad) * cos(rad);
    vertex(x, y);
  }
  endShape();

  angle += 2;

  if (maxOffset < width) {
    maxOffset += offsetStep;
  } else {
    maxOffset = 0;
  }
}


function keyPressed() {
  if (key == 's'){
    saveCanvas('20230822-2', 'png');
  }
}