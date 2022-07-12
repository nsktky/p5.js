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
  noiseDetail(4);
  let tileCount = 5;
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
      let newRed = red(pixColor);
      let newGreen = green(pixColor);
      let newBlue = blue(pixColor);
      stroke(newRed*1.2, newGreen*1.2, newBlue*1.2)
      strokeWeight(3);
      line(points[i].x, points[i].y, width * 0.5, height * 0.5);
    }
}