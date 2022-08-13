let tileCount, seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200)
  rectMode(CENTER);
  angleMode(DEGREES);
  tileCount = 20;
  noStroke();
  seed = random(100000000)
}

function draw() {
  randomSeed(seed);
  background(200, 10)
  let grid = width / tileCount;
  for(let x = 0; x <= width; x += grid){
    fill(0)
    circle(x, height/2+cos(frameCount)*height/3, 10);
    fill(250, 100, 20)
    circle(grid*int(random(grid)), height/2+cos(frameCount)*height/3, 10);
  }
}