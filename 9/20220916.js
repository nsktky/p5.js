let count;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  count = 1
  noStroke();
}

function draw() {
  background(0)
  grid = 10
  for(let y = 0; y <= height; y += grid){
    for(let x = 0; x <= width; x += grid){
      let size = map(noise(x, y), 0, 1, 0, grid)
      rect(x,y,size+count)
      count = map(cos(frameCount*0.005),-1, 1, -grid, grid)
    }
  }
}
