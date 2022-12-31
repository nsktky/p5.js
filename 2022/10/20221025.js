let points = []
let grid, cell;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rectMode(CENTER)
  angleMode(DEGREES)
  background(20)
  noStroke();

  grid = 200
  cell = 20
  for (let x = 0; x < grid; x += cell * 2) {
    for (let y = 0; y < grid; y += cell * 2) {
      for (let z = 0; z < grid; z += cell * 2) {
        let p = createVector(x, y, z)
        points.push(p)
      }
    }
  }

}

function draw() {
  // background(200)
  rotateX(frameCount)
  rotateY(frameCount*0.1)
  rotateZ(frameCount)

  orbitControl()

  for (let i = 0; i < points.length; i++) {
    directionalLight(255, 255, 255, 100, -100, -1);
    // specularMaterial(250, 190, 20);
    normalMaterial()

    push()
    translate(points[i].x, points[i].y, points[i].z)
    sphere(cell)
    pop()
  }
}