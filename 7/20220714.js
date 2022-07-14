let img, cnv;
function preload() {
  img = loadImage("img20220625.jpg")
}

let points = [];
let mult = 0.001;
let mult2 = 600;
let size = 3;

function setup() {
 cnv = createCanvas(img.width, img.height);
 angleMode(DEGREES);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);

  img.loadPixels();
  background(180);
  // noiseDetail(4);
  let tileCount = random(20);
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

}

function draw() {
    for (let i = 0; i < points.length; i++) {
      let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
      points[i].add(createVector(sin(angle), cos(angle)));

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = width;
      if (points[i].y < 0) points[i].y = height;
      if (points[i].y > height) points[i].y = random(height);

      let pixColor = color(img.get(points[i].x, points[i].y));
      let newRed = map(noise(red(pixColor)), 0, 1, 0, 255);
      let newGreen = map(noise(green(pixColor)), 0, 1, 0, 255);
      let newBlue = map(noise(blue(pixColor)), 0, 1, 0, 255);

      strokeWeight(3);
      fill(newRed*1.5, newGreen*1.5, newBlue*1.5);
      stroke(newRed, newGreen, newBlue)
      rect(points[i].x, points[i].y, random(random(10)));
      rect(points[i].x+random(random(20)), points[i].y+random(random(20)), random(random(10)));
      rect(points[i].x-random(random(20)), points[i].y-random(random(20)), random(random(10)));
      rect(points[i].x+random(random(20)), points[i].y-random(random(20)), random(random(10)));
      rect(points[i].x-random(random(20)), points[i].y+random(random(20)), random(random(10)));
    }
}