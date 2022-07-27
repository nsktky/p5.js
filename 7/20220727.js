let img, cnv;
function preload() {
  img = loadImage("img20220628.jpg")
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
  background(img);

  let tileCount = 2;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  background(img)
  randomSeed(seed);
   for (let i = 1; i < points.length; i++) {
      let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
      points[i].add(createVector(cos(angle), sin(angle)));

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = width;
      if (points[i].y < 0) points[i].y = height;
      if (points[i].y > height) points[i].y = random(height);
      let pixColor = color(img.get(points[i].x, points[i].y));

      let newRed = map(noise(red(pixColor)), 0, 1, 0, 255);
      let newGreen = green(pixColor);
      let newBlue = blue(pixColor);

      stroke(newRed*1.5, newGreen*1.5, newBlue*1.5);
      line(points[i].x, points[i].y, map(sin(frameCount*0.005), -1, 1, 0, width),
       map(cos(frameCount*0.005), -1, 1, 0, height));
      fill(newRed*2, newGreen*2, newBlue*2, 100);
      rect(points[i].x, points[i].y, 20);

      circle(map(sin(frameCount*0.005), -1, 1, 0, width),
       map(cos(frameCount*0.005), -1, 1, 0, height), 100);

    }
}