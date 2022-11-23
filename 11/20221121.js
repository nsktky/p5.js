let radius, grid, seed
let points = []

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255)
  // colorMode(HSB, 360, 100, 100, 100);
  // angleMode(DEGREES);
  radius = min(width, height) / 5;
  grid = width / 4;
  for(let y = 0; y <= height + grid; y += grid){
    for(let x = 0; x <= width + grid; x += grid){
      let p = createVector(x, y)
      points.push(p)
    }
  }

  seed = random(100000000000);

}

function draw(){
  randomSeed(seed);
  for(let i = 0; i < points.length; i++){
    push();
    translate(points[i].x, points[i].y);
    beginShape()
    fill(250, 190, 20, 20)
    for(let i = 0; i < 100; i++){
      angle = map(noise(frameCount * 0.001, i*random(0.001, 0.01)), 0, 1, 0, 360)
      let x = map(sin(angle), -1, 1, -grid*0.5,  grid*0.5)
      let y = map(cos(angle), -1, 1, -grid*0.5,  grid*0.5)
      vertex(x, y)
    }
    endShape(CLOSE)
    pop();
  }
}