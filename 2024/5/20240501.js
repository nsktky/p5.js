let grid = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
}

function draw() {
  fill(255, 1/frameCount*1000);
  for(let x = 0; x < width + grid; x+=grid) {
    for(let y = 0; y < height + grid; y+=grid) {
      circle(x, y, random(grid));
    }
  }
}

function keyPressed() {
  if (key == 'j'){
    saveCanvas('20240101-2', 'png');
  }
}