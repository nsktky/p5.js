let radius
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)
  radius = 200
  angleMode(DEGREES)
}

function draw() {
  // for(let i = 0; i <1; i++) {
  // fill(0)
  // circle(random(random(width)), random(random(height)), random(10));
  // }

  translate(width/2, height/2);
  fill(255)
  // rotate(frameCount*0.01)
  beginShape()
  for(let i = 0; i < 30; i++) {
    let ox = sin(i)
    let oy = cos(i)
    let angle = map(noise(dist(width/2, height/2, ox, oy), i), 0, 1, 0, 360)
    let x = radius * cos(i + angle / frameCount * 0.3)
    let y = radius * cos(i + angle + frameCount * 0.3)
    vertex(x, y)
  }
  endShape()

}
