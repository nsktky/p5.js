let x, y, radius;

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  radius = min(width, height) * 0.004
}

function draw() {
  background(0)
  translate(width/2, height/2);
  for(let i = 0; i < 100; i++) {
    let xoff = map(cos(i), -1, 1, 0, 360)
    let yoff = map(sin(i), -1, 1, 0, 360)
    x = radius * i * cos(xoff - frameCount)
    y = radius * i * sin(yoff + frameCount)
    if(keyIsPressed) {
      strokeWeight(1)
      frameRate(4)
      stroke(255, 0, 0)
      fill(255, 0, 0)
      circle(x, y, 10)
      stroke(255)
      fill(255)
      textSize(20)
      let textX = 'X : ' + str(round(x))
      let textY = 'Y : ' + str(round(y))
      text(textX, x+20, y+10)
      text(textY, x+20, y+40)
      noFill()
    } else {
      frameRate(60)
      stroke(250, 190, 20)
      strokeWeight(4)
      fill(xoff, i, yoff)
    }
    circle(x, y, radius*50)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}