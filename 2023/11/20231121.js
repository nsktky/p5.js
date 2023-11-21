let speed;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(22, 20, 30);
  angleMode(DEGREES);
  speed = 1
  noFill();
  grid = min(width, height) / 3
}

function draw() {
  background(0, 1)
  for(let ox = 0; ox < width + grid; ox += grid){
    for(let oy = 0; oy < height + grid; oy += grid){
      beginShape()
      for(let i = 0; i < 36; i++) {
        stroke(random(200, 250), 100, 20);
        let angle = speed * frameCount - random(20);
        let r = grid;
        let x = r * cos(angle)/sin(angle);
        let y = r * cos(angle);
        vertex(ox + y, oy + x)
      }
      endShape(CLOSE);
    }
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20231121-2', 'png');
  }
}