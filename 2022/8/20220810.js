
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180)
  noStroke()
  rectMode(CENTER);
}

function draw() {
  background(180)
  let grid = width / 20;
  for(let y = 0; y <= height; y+=grid) {
    for(let x = 0; x <= width; x+=grid) {
      fill(noise(x)*255, noise(y)*255, noise(x*y*0.5)*255)
      noStroke()
      rect(x, y, grid*sin(frameCount*0.005))

      stroke(250, 191, 19, 100)
      line(x, y, width/2, height/2)
    }
  }
}