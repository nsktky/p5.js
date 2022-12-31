let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200)
  angleMode(DEGREES);
  seed = random(100000000000000);
}

function draw() {
  randomSeed(seed);
  fill(255);
  let tileCount = 40;
  let grid = width / tileCount;

  // let randomX = 
  // let randomY = height / tileCount * int(random(grid))

  for(let x = 0; x <= width; x += grid){
    for(let y = 0; y <= height; y += grid){
      fill(230)
      circle(x, y, grid)
      fill(random(255))
      arc(x, y, grid*0.9, grid*0.9, random(360), frameCount, PIE)
    }
  }
}