let img1, img2, cnv;
function preload() {
  img1 = loadImage("img20220627-1.jpg");
  img2 = loadImage("img20220627-2.jpg");
}

let points = [];
let mult = 0.001;
let mult2 = 600;

function setup() {
  cnv = createCanvas(img1.width, img1.height);
  let newCanvasX = (windowWidth - img1.width)/2;
  let newCanvasY = (windowHeight - img1.height)/2;
  cnv.position(newCanvasX, newCanvasY);

  noStroke();
  img1.loadPixels();
  img2.loadPixels();
  image(img1, 0, 0);

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
  if(frameCount > 100){
    for (let i = 0; i < points.length; i++) {
      let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, mult2);
      points[i].add(createVector(sin(angle), cos(angle)));

      if (points[i].x > width) points[i].x = random(width);
      if (points[i].x < 0) points[i].x = width;
      if (points[i].y < 0) points[i].y = height;
      if (points[i].y > height) points[i].y = random(height);

      let pixColor2 = color(img2.get(points[i].x, points[i].y));
      fill(pixColor2);
      rect(points[i].x, points[i].y, 1);
      if(frameCount > 600){
        circle(points[i].x, points[i].y, i*0.003);
      }
    }
  }
}