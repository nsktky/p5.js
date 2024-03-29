let points = [];
let img;
function preload() {
  img = loadImage("3.png")
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

  for (let i = 0; i < 20; i++) {
    let x = random(width); 
    let y = random(height); 
    let angle = random(36);
    let pixColor = color(img.get(x, y));
    pixColor.setAlpha(5);
    points.push({x: x, y: y, angle: angle, color: pixColor}); 
  }
  // blendMode(BURN)
}

function draw() {
  for (let point of points) {
    let x = point.x;
    let y = point.y;
    let angle = point.angle;
    let col = point.color;
    stroke(col);
    noFill();
    for(let i = 0; i < 30; i++){
      let len = map(sin(frameCount*0.1), -1, 1, 0, 40);
      let endX = x + len * cos(angle);
      let endY = y + len * sin(angle);
      rect(x, y, endX, endY);
      x = endX;
      y = endY;
      angle += random(360);
    }
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20230619', 'png');
  }
}
