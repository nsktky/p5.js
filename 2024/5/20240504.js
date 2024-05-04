let grid = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
  noStroke();
  angleMode(DEGREES);
}

function draw() { 
  for(let x = 0; x < width + grid; x+=grid) {
    for(let y = 0; y < height + grid; y+=grid) {
      push()
      translate(x-grid, y-grid)
      fill(255*sin(x*y*noise(x/y/frameCount*1)));
      rotate(360*sin(x*y*noise(x/y/frameCount*1)))
      rect(0, 0, grid)
      pop()
    }
  }
}

function keyPressed() {
  if (key == 'j'){
    saveCanvas('20240101-2', 'png');
  }
}