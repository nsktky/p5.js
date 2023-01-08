let colorPalette = ["#FFFFFF05", "#1C141205", "#473D3E05", "#C49C6B05", "#BFC1CE05", "#7C768405", "#948CA105", "#D7D6DE05", "#645D6405"]
let points = []
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight)
  background("#EAEFF301")
  shuffle(colorPalette)
  rectMode(CENTER)
  noStroke()
  grid = width / 50

  for(let y = 0; y < height; y+=grid) {
    for(let x = 0; x < width; x+=grid) {
      let p = createVector(x, y)
      points.push(p)
    }
  }
}

function draw() {
  translate(width/2, height)
  for(let i = 0; i < points.length; i++) {
    let c = map(noise(points[i].x, points[i].y, frameCount*0.005), 0, 1, 0, 9)
    fill(colorPalette[int(c)])
    push();
    rotate(i + frameCount*c*0.001)
    rect(points[i].x, points[i].y, grid / (c + 1))
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}