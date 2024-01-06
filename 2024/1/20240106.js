let grid;
let points = [];
let mult = 0.001;

let colorList = [];
for(let i = 0; i < 100; i++) {
  let color = (Math.random() * 0xFFFFFF | 0).toString(16);
  let randomColor = "#" + ("000000" + color).slice(-6);
  colorList[i] = randomColor;
}

let outputColors = [
  chroma.scale(colorList).mode("rgb").out("hex"),
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // rectMode(CENTER);
  noStroke();
  noFill();
  angleMode(DEGREES);
  grid = min(width, height) / 8
  let xOffset = width / 10;
  let yOffset = height / 10;

  for(let x = xOffset; x < width - xOffset; x+=grid) {
    for(let y = yOffset; y < height - yOffset; y+=grid) {
      let p = createVector(x, y)
      points.push(p);
    }
  }
}

function draw() {
  // background(150)
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 100);
    let c = sin(angle)*0.1;

    push();
    translate(points[i].x, points[i].y);

    for(let j = 0; j < 10; j+=1) {
      let c1 = cos(angle)+tan(i/j)*frameCount
      push();
      rotate(c1+angle)
      stroke(outputColors[0](map(c, -1, 1, 0, 1)));
      rect(0, 0, grid * map(j, 0, 99, 0.8, 0.8));
      pop();
    }
    pop();
  }
}

function keyPressed() {
  if (key == 'j'){
    saveCanvas('20240106-2', 'png');
  }
}