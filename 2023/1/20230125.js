let circles = [];
let r

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 150, 20);
  noStroke()
  angleMode(DEGREES);
  r = width / 30;

  for(let i = 0; i < 10000; i++) {
    let x = random(width)
    let y = random(height)
    let z = random(r*0.1, r*0.5)
    if(circles.every(c => dist(x, y, c.x, c.y) > (z + c.z) * 0.5)){
      let p = createVector(x, y, z)
      circles.push(p)
    }
  }
  fill(0)
}

function draw() {
  rotate(frameCount*0.001)
  for(let i = 0; i < circles.length; i++) {
    circle(circles[i].x, circles[i].y, circles[i].z);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}