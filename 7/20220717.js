let img, cnv;
function preload() {
  img = loadImage("img20220628.jpg")
}

let points = [];
let mult = 0.001;
let mult2 = 600;
let size = 3;

function setup() {
 cnv = createCanvas(img.width, img.height);
 angleMode(DEGREES);
 rectMode(CENTER);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);

  img.loadPixels();
  background(0);
  // noiseDetail(4);
  let tileCount = 40;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

}

function draw() {
  background(0);
    for (let i = 1; i < points.length; i++) {
      let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
      points[i].add(createVector(sin(angle), cos(angle)));

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = width;
      if (points[i].y < 0) points[i].y = height;
      if (points[i].y > height) points[i].y = random(height);

      let pixColor = color(img.get(points[i].x, points[i].y));
      let newGreen = green(pixColor);
      let newBlue = blue(pixColor);
      let newRed = red(pixColor);
      let d = dist(points[i].x, points[i].y, points[i-1].x, points[i-1].y);
      let lineAlpha = map(d, 400, 0, 0, 255);

      fill(newRed*1.5, newGreen*1.5, newBlue*1.5);
      if(d < 500){
      stroke(newRed*0.8, newGreen*0.8, newBlue*0.8, lineAlpha);
      line(points[i].x, points[i].y, points[i-1].x, points[i-1].y);
      } else {
          noStroke();
      }
      stroke(newRed*0.8, newGreen*0.8, newBlue*0.8, max(lineAlpha, 100));
      line(points[i].x, points[i].y, width*0.5, height*0.5);
      rect(points[i].x, points[i].y, 2);
    }
}