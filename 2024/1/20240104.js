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
  // noStroke();
  // angleMode(DEGREES);
  grid = min(width, height) / 80

  for(let x = 0; x < width + grid; x+=grid) {
    for(let y = 0; y < height + grid; y+=grid) {
      let p = createVector(x, y)
      points.push(p);
    }
  }
}

function draw() {
  // background(0, 10)
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 10);
    let x = sin(i)/cos(angle)*0.1;
    let y = sin(angle)*0.1;
    points[i].add(createVector(x, y));

    if(points[i].x > width) points[i].x = random(width);
    if(points[i].x < 0) points[i].x = random(width);
    if(points[i].y > height) points[i].y = random(height);
    if(points[i].y > height) points[i].y = random(height);

    fill(outputColors[0](map(y, -1, 1, 0, 1)));
    rect(points[i].x, points[i].y, 10);
  }
}

function keyPressed() {
  if (key == 'j'){
    saveCanvas('20240104-2', 'png');
  }
}