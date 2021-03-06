let img, cnv;
function preload() {
  img = loadImage("img20220623.jpg")
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
  for(let col = 0; col < img.width; col+=10){
    for(let row = 0; row < img.height; row+=10){
    let pix = color(img.get(col, row));
    let greyscale = round(red(pix) * 0.222 + green(pix) * 0.207 + blue(pix) * 0.071);
    fill(greyscale);
    rect(col+random(3), row+random(3), 10);
    }
  }

  noiseDetail(4);
  angleMode(DEGREES);
  let tileCount = 15;
  let grid = width / tileCount;

  for (let y = 0; y <= height; y += grid) {
    for (let x = 0; x <= width; x += grid) {
      let p = createVector(x, y);
      points.push(p);
    }
  }

}

function draw() {
  if(frameCount > 300){
    for (let i = 0; i < points.length; i++) {
      let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
      points[i].add(createVector(sin(angle), cos(angle)));

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = width;
      if (points[i].y < 0) points[i].y = height;
      if (points[i].y > height) points[i].y = random(height);

      let pixColor = color(img.get(points[i].x, points[i].y));
      fill(pixColor);
      rect(points[i].x+random(3), points[i].y+random(3), 1);
    }
  }
}