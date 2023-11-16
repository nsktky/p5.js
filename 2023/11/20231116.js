let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(22, 20, 30);
  angleMode(DEGREES);
  speed = random(20)
  noFill();
}

function draw() {
  // background(220)
  translate(width/2, height/2);
  beginShape()
  for(let i = 0; i < 360; i++) {
    stroke(random(100, 255), 50, 20);
    let angle = speed * frameCount - random(-1, 1);
    let r = i;
    let x = r * tan(angle);
    let y = r * cos(angle);
    vertex(x, y)
  }
  endShape(CLOSE);

}


function keyPressed() {
  if (key == 's'){
    saveCanvas('20231116-2', 'png');
  }
}