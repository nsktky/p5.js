let img, cnv;
function preload() {
  img = loadImage("img20220731.jpg")
}

let points = [];
let mult = 0.0001;
let mult2 = 100;
let sizes = [];

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  img.loadPixels(0);

  angleMode(DEGREES);
  rectMode(CENTER);
  noiseDetail(1);
  background(img);

  let tileCount = 20;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
      sizes.push(1);
    }
  }
}

function draw() {
   for (let i = 1; i < points.length; i++) {
      let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
      points[i].add(createVector(cos(angle), sin(angle)));

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = width;
      if (points[i].y < 0) points[i].y = height;
      if (points[i].y > height) points[i].y = random(height);
      let pixColor = color(img.get(points[i].x, points[i].y));

      let newRed = green(pixColor);
      let newGreen = blue(pixColor);
      let newBlue = red(pixColor);

      noFill();
      if(green(pixColor) > 200){
        stroke(newRed, newGreen*3, newBlue, 150);
        strokeWeight(random(3));
        line(points[i].x, points[i].y, points[i].x, points[i].y+sizes[i]);
        sizes[i] -= 2;
      }
  }
}