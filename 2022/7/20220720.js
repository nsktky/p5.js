let img, cnv;
function preload() {
  img = loadImage("img20220625.jpg")
}

let points = [];
let mult = 0.001;
let mult2 = 200;
let seed;

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
   img.loadPixels(0);

  //  angleMode(DEGREES);
   rectMode(CENTER);
   seed = random(1000000);
  noiseDetail(4);
  let tileCount = 3;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  randomSeed(seed);
  background(0, 10)
   for (let i = 1; i < points.length; i++) {
      let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
      points[i].add(createVector(sin(angle), cos(angle)));

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = width;
      if (points[i].y < 0) points[i].y = height;
      if (points[i].y > height) points[i].y = random(height);

      let pixColor = color(img.get(points[i].x, points[i].y));
      let newRed = green(pixColor);
      let newGreen = blue(pixColor);
      let newBlue = red(pixColor);
      let j = int(random(1, i));
      strokeWeight(1);
      stroke(newRed*1.5, newGreen*1.5, newBlue*1.5);
      line(points[i].x, points[i].y, points[j].x, points[j].y);
      fill(newRed*2, newGreen*2, newBlue*2);
      rect(points[i].x, points[i].y, 10);
    }
}