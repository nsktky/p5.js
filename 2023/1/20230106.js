let backImg, img, cnv, x, y;
function preload() {
  backImg = loadImage("20230106back.png")
  img = loadImage("20230106.png")

}

function setup() {
  cnv = createCanvas(backImg.width, backImg.height);
  let newCanvasX = (windowWidth - backImg.width)/2;
  let newCanvasY = (windowHeight - backImg.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  image(backImg, 0, 0);
  backImg.loadPixels();
  img.loadPixels();
  angleMode(DEGREES)
  img.resize(width*0.3, height*0.4)
}

function draw() {
  background(backImg, 100)
  for (var i = 0; i < 360; i++){
    let xoff = map(sin(i), -1, 1, 0, 0.01)
    let yoff = map(cos(i), -1, 1, 0, 0.01)
    let angle = map(noise(xoff, yoff, frameCount*0.001), 0, 1, 0, 360)
    push();
    translate(width / 3, height / 3)
    x = i * tan(angle * frameCount*0.001)
    y = i * cos(i + angle)
    image(img, x, y)


    pop();
  }
}