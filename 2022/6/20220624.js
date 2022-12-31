let img, cnv;
function preload() {
  img = loadImage("img20220624.jpg")
}

let points = [];
let mult = 0.001;
let mult2 = 300;
function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);

  noStroke();
  img.loadPixels();
  image(img, 0, 0)

  noiseDetail(4);
  angleMode(DEGREES);
  let tileCount =   10;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

}

function draw() {
  if(frameCount > 240){
    for (let i = 0; i < points.length; i++) {
      let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
      points[i].add(createVector(sin(angle), cos(angle)));

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = width;
      if (points[i].y < 0) points[i].y = height;
      if (points[i].y > height) points[i].y = random(height);

      let pixColor = color(img.get(points[i].x, points[i].y));
      let scale = round(red(pixColor) + green(pixColor) + blue(pixColor));
      fill(scale*0.97, scale*0.96, scale*0.89);
      rect(points[i].x, points[i].y, 1);
      fill(scale*0.4, scale*0.39, scale*0.13);
      rect(points[i].x+10, points[i].y+10, 1);
      fill(scale*0.57, scale*0.18, scale*0.26);
      rect(points[i].x-10, points[i].y-10, 1);
    }
  }
}