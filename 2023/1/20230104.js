let img, cnv;
function preload() {
  img = loadImage("img20230104.jpg")
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  image(img, 0, 0);
  img.loadPixels();
  angleMode(DEGREES)
}

function draw() {
  background(img, 6)
  for (var i = 0; i < 360; i++){
    let xoff = map(sin(i), -1, 1, 0, 0.01)
    let yoff = map(cos(i), -1, 1, 0, 0.01)
    let angle = map(noise(xoff, yoff, frameCount*0.004), 0, 1, -180, 180)
    push();
    translate(width / 2, height * 0.63)
    branch(height * 0.04, angle)
    pop();
  }
}

function branch(len, branchAngle) {
  fill(0)
  strokeWeight(6)
  line(0, 0, -len*0.4, len*0.4);
  stroke(255);
  strokeWeight(3)
  line(0, 0, 0, -len);
  translate(0, -len)
  rotate(branchAngle);
  if (len > 10) {
      branch(len * 0.5, branchAngle)
  }
}