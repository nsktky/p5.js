let img1, img2, cnv;
function preload() {
  img1 = loadImage("img20220628.jpg")
  img2 = loadImage("img20220625.jpg")
}

let points = [];
let mult = 0.001;
let mult2 = 600;
let size = 2;
let flag = false;
let noiseNumber = 4;
let gradientFill, timer;

function setup() {
 cnv = createCanvas(img1.width, img1.height);
  let newCanvasX = (windowWidth - img1.width)/2;
  let newCanvasY = (windowHeight - img1.height)/2;
  cnv.position(newCanvasX, newCanvasY);

  noStroke();
  img1.loadPixels();
  img2.loadPixels();

  background(40);

  noiseDetail(noiseNumber);
  let tileCount = 40;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

  gradientFill = drawingContext.createRadialGradient(
    width * 0.5,
    height * 0.1,
    width * 0.1,
    width / 2,
    height / 2,
    width * 0.5
  );
  gradientFill.addColorStop(0, color(4, 179, 169, 100));
  gradientFill.addColorStop(0.5, color(0, 55, 126, 100));
  gradientFill.addColorStop(1, color(0, 75, 101, 100));
  drawingContext.fillStyle = gradientFill;
  rect(0,0,width, height);

  timer = 1;
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
      let newRed = map(noise(red(pixColor1) + green(pixColor2)), 0, 1, 0, 255);
      let newGreen = map((green(pixColor1) + blue(pixColor2)), 0, 510, 0, 255);
      let newBlue = map((blue(pixColor1) + red(pixColor2)), 0, 510, 0, 255);
      fill(newRed, newGreen, newBlue);
      circle(points[i].x, points[i].y, size);
    }

    if (frameCount % (timer * 600) == 0) {
      background(40, 200)
      if (flag) {
        angleMode(RADIANS);
      } else {
        angleMode(DEGREES);
      }
      flag = !flag;

      drawingContext.fillStyle = gradientFill;
      rect(0,0,width, height)
      timer += 1;
    }
}