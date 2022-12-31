let img, cnv;
function preload() {
  img = loadImage("img20220625.jpg")
}

let points = [];
let mult = 0.001;
let mult2 = 600;

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);

  noStroke();
  img.loadPixels();
  image(img, 0, 0);

  noiseDetail(4);
  angleMode(DEGREES);
  let tileCount = 60;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

}

function draw() {
  if(frameCount > 180){
    for (let i = 0; i < points.length; i++) {
      let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
      points[i].add(createVector(sin(angle), cos(angle)));

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = width;
      if (points[i].y < 0) points[i].y = height;
      if (points[i].y > height) points[i].y = random(height);

      let pixColor = color(img.get(points[i].x, points[i].y));
      let scale = round(red(pixColor) + green(pixColor) + blue(pixColor));
      fill(red(pixColor), scale*sin(frameCount*0.1), scale*cos(frameCount*0.1), 100);
      rect(points[i].x, points[i].y, 3);
    }
  }
}