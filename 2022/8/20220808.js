
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25)
  rectMode(CENTER);
  let grid = 50
  for(let y = 0; y < height; y+= grid) {
    for(let x = 0; x < width; x+= grid) {
      fill(255)
      rect(x, y, grid)
    }
 }
}

function draw() {
  let grid = 10
  for(let y = 0; y < height; y+= grid) {
    for(let x = 0; x < width; x+= grid) {
      strokeWeight(1)
      circle(x, y, sin(frameCount*0.01)*grid)
  }
 }
}