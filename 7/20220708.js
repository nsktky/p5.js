let img1, img2, img3, cnv;
function preload() {
  img1 = loadImage("img20220708-1.jpg")
  img2 = loadImage("img20220708-2.jpg")
  img3 = loadImage("img20220625.jpg")
}

let points = [];
let mult = 0.001;
let mult2 = 600;
let size = 2;
let flag = false;

function setup() {
 cnv = createCanvas(img1.width, img1.height);
 angleMode(DEGREES);
  let newCanvasX = (windowWidth - img1.width)/2;
  let newCanvasY = (windowHeight - img1.height)/2;
  cnv.position(newCanvasX, newCanvasY);

  noStroke();
  img1.loadPixels();
  img2.loadPixels();
  img3.loadPixels();

  background(40);

  noiseDetail(1);
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
      let newRed = map((red(pixColor1) + red(pixColor2) + red(pixColor3)), 0, 765, 0, 200);
      let newGreen = map((green(pixColor1) + green(pixColor2) + green(pixColor3)), 0, 765, 0, 155);
      let newBlue = map((blue(pixColor1) + blue(pixColor2) + blue(pixColor3)), 0, 765, 0, 235);
      fill(newRed, newGreen, newBlue, 10);
      rect(points[i].x, points[i].y, size);
    }
    size += cos(frameCount * 0.01)*0.1
}