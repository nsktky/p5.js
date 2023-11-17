let speed;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(22, 20, 30);
  angleMode(DEGREES);
  speed = random()
  noFill();
  grid = min(width, height) / 3
}

function draw() {
  background(0, 1)
  for(let ox = 0; ox < width + grid; ox += grid){
    for(let oy = 0; oy < height + grid; oy += grid){
      beginShape()
      for(let i = 0; i < 360; i++) {
        stroke(random(100, 255), 50, 20);
        let angle = speed * frameCount - random(-1, 1);
        let r = grid;
        let x = r * cos(i)*sin(angle);
        let y = r * cos(angle);
        vertex(ox + x, oy + y)
      }
      endShape(CLOSE);
    }
  }
}


function keyPressed() {
  if (key == 's'){
    saveCanvas('20231117-2', 'png');
  }
}