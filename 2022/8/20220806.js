let img, cnv;
function preload() {
  img = loadImage("img20220731.jpg")
  img2 = loadImage("img20220623.jpg")
}

let points = [];
let mult = 0.0001;
let mult2 = 600;
let sizes = [];

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  img.loadPixels(0);
  img2.loadPixels(0);

  // angleMode(DEGREES);
  rectMode(CENTER);
  noiseDetail(5);
  background(200);
  noStroke();

  let tileCount = 40;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
      let lineSize = 1;
      let radius = 1;
      let p2 = createVector(lineSize, radius);
      sizes.push(p2);
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
      let pixColor2 = color(img2.get(points[i].x, points[i].y));

      let newRed = map(noise(red(pixColor2)), 0, 1, 0, 255);
      let newGreen = green(pixColor2);
      let newBlue = blue(pixColor2);

      if(green(pixColor) > 140){
        noStroke();
        fill(red(pixColor))
        rect(points[i].x, points[i].y, 1);
      }

      if(green(pixColor) > 200) {
        stroke(newRed*2);
        line(points[i].x, points[i].y, points[i].x, points[i].y-sizes[i].x);
        fill(newBlue);
        circle(points[i].x, points[i].y-sizes[i].x, sizes[i].y);
        sizes[i].x += 1.5;
        sizes[i].y += 0.2;
      }
      
      noStroke();
      fill(pixColor);
      rect(points[i].x, points[i].y, 0.2);
  }
}