let img, cnv;
function preload() {
  img = loadImage("img20230103.jpg")
}

let points = [];
let mult = 0.001;
let mult2 = 300;
function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);

  image(img, 0, 0);
  img.loadPixels();

  noiseDetail(4);
  noStroke();
  angleMode(DEGREES);
  let tileCount = 30;
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
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, mult2);
    points[i].add(createVector(sin(angle), cos(angle)));

    if (points[i].x > width) points[i].x = random(width);
    if (points[i].x < 0) points[i].x = random(width);
    if (points[i].y < 0) points[i].y = random(height);
    if (points[i].y > height) points[i].y = random(height);

    let pix = color(img.get(points[i].x, points[i].y));
    let scale = round(red(pix) * 1.1922 + green(pix) * 0.707 + blue(pix) * 0.471);
    fill(red(pix), scale, blue(pix));
    rect(points[i].x + random(4), points[i].y + random(4), 2);
    fill(red(pix),green(pix), scale);
    rect(points[i].x - random(4), points[i].y - random(4), 2);
    fill(scale, green(pix), blue(pix));
    rect(points[i].x, points[i].y, 3);
  }
}