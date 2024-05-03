let grid = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  for(let x = 0; x < width + grid; x+=grid) {
    for(let y = 0; y < height + grid; y+=grid) {
      fill(255*sin(x*y*noise(x/y/frameCount*1)));
      rect(x, y, grid);
    }
  }
}

function keyPressed() {
  if (key == 'j'){
    saveCanvas('20240101-2', 'png');
  }
}