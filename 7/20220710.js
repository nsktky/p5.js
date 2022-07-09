let img1, img2, img3, cnv;
function preload() {
  img1 = loadImage("img20220623.jpg")
  img2 = loadImage("img20220628.jpg")
  img3 = loadImage("img20220625.jpg")
}

let points = [];
let mult = 0.001;
let mult2 = 600;
let size = 3;
let flag = false;

function setup() {
 cnv = createCanvas(img1.width, img1.height);
 angleMode(DEGREES);
  let newCanvasX = (windowWidth - img1.width)/2;
  let newCanvasY = (windowHeight - img1.height)/2;
  cnv.position(newCanvasX, newCanvasY);

  img1.loadPixels();
  img2.loadPixels();
  img3.loadPixels();

  background(180);

  noiseDetail(4);
  let tileCount = 1;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

}

function draw() {
  beginShape()
    for (let i = 0; i < points.length; i++) {
      let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
      points[i].add(createVector(sin(angle), cos(angle)));

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = width;
      if (points[i].y < 0) points[i].y = height;
      if (points[i].y > height) points[i].y = random(height);

      let pixColor1 = color(img1.get(points[i].x, points[i].y));
      let pixColor2 = color(img2.get(points[i].x, points[i].y));
      let pixColor3 = color(img3.get(points[i].x, points[i].y));
      let newRed = map((red(pixColor1) + red(pixColor2) + red(pixColor3)), 0, 765, 100, 255);
      let newGreen = map((green(pixColor1) + green(pixColor2) + green(pixColor3)), 0, 765, 100, 255);
      let newBlue = map((blue(pixColor1) + blue(pixColor2) + blue(pixColor3)), 0, 765, 100, 255);
      fill(newRed, newGreen, newBlue, 100);
      stroke(newRed*1.2, newGreen*1.2, newBlue*1.2)
      vertex(points[i].x, points[i].y);
    }
    endShape();
}