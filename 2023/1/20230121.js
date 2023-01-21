let points = [];
let grid

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  // colorMode(HSB, 360, 100, 100, 100)
  // rectMode(CENTER)

  grid = width / 100

  for(let y = 0; y < height; y+=grid) {
    for(let x = 0; x < width; x+=grid) {
      let p = createVector(x, y)
      points.push(p)
    }
  }

  // blendMode(DIFFERENCE);
  stroke(71, 66, 116)
  strokeWeight(grid*0.1)
}

function draw() {
  translate(width / 2, height / 2);
  for(let i = 0; i < points.length; i++) {
    let c = map(noise(points[i].x, points[i].y, frameCount*0.01), 0, 1, 0, 255)
    fill(c*2, c*1.5, c)
    rect(points[i].x, points[i].y, grid)

    let c2 = map(noise(-points[i].x, points[i].y, frameCount*0.01), 0, 1, 0, 255)
    fill(c2*2, c2*1.5, c2)
    rect(-points[i].x, points[i].y, grid)

    let c3 = map(noise(points[i].x, -points[i].y, frameCount*0.01), 0, 1, 0, 255)
    fill(c3*2, c3*1.5, c3)
    rect(points[i].x, -points[i].y, grid)

    let c4 = map(noise(-points[i].x, -points[i].y, frameCount*0.01), 0, 1, 0, 255)
    fill(c4*2, c4*1.5, c4)
    rect(-points[i].x, -points[i].y, grid)
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}