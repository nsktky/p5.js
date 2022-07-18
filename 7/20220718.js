let img, cnv;
function preload() {
  img = loadImage("img20220622.jpg")
}

let points = [];
let mult = 0.01;
let mult2 = 200;

function setup() {
 cnv = createCanvas(img.width, img.height);
 angleMode(DEGREES);
 rectMode(CENTER);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);

  img.loadPixels();
  // background(img);
  // noiseDetail(4);
  let tileCount = 10;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  if(frameCount < 300){
    background(0);
  }

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
      let d = dist(points[i].x, points[i].y, points[i-1].x, points[i-1].y);
      let lineAlpha = map(d, 400, 0, 0, 255);

      fill(newRed*1.2, newGreen*1.2, newBlue*1.2);
      if(d < 500){
      stroke(newRed*1.5, newGreen*1.5, newBlue*1.5, lineAlpha);
      line(points[i].x, points[i].y, points[i-1].x, points[i-1].y);
      } else {
          noStroke();
      }
      stroke(newRed*1.5, newGreen*1.5, newBlue*1.5, max(lineAlpha, 100));
      line(points[i].x, points[i].y, width*0.5, height*0.5);
      rect(points[i].x, points[i].y, 5);
    }
}