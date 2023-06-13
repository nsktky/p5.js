let points = [];
let img;
function preload() {
  img = loadImage("picture2.png")
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  background(0);
  angleMode(DEGREES);
  img.loadPixels();
  image(img, 0, 0);

  for (let i = 0; i < 10; i++) {
    let x = random(width); 
    let y = random(height);
    let angle = random(360);
    points.push({x: x, y: y, angle: angle}); 
  }
}

function draw() {
  for (let point of points) {
    let x = point.x;
    let y = point.y;
    let angle = point.angle;
    for(let i = 0; i < 100; i++){
      let len = map(sin(tan(frameCount*0.6)), -1, 1, -100, 100);
      let endX = x + len * cos(angle);
      let endY = y + len * sin(angle);

      let pixColor = color(img.get(x, y));
      r = red(pixColor);
      g = green(pixColor);
      b = blue(pixColor);
      let greyscale = round(r * 0.222 + g * 0.707 + b * 0.471);
      stroke(r, g, b);
      fill(greyscale, 40)
      rect(x, y, 10);
      x = endX;
      y = endY;
      angle += 5;
    }
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20230613', 'png');
  }
}
