let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  angleMode(DEGREES);
  speed = random(20)
  noFill();
}

function draw() {
  // background(220)
  translate(width/2, height/2);
  beginShape()
  for(let i = 0; i < 360; i++) {
    let angle = speed * frameCount - random(-1, 1);
    let r = i;
    let x = r * sin(angle);
    let y = r * cos(angle);
    vertex(x, y)
  }
  endShape(CLOSE);

}




function keyPressed() {
  if (key == 's'){
    saveCanvas('20231113-2', 'png');
  }
}