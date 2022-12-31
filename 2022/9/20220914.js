function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(20);
  stroke(250, 190, 20);
}

function draw() {
  background(20);
  orbitControl();

  let grid = 50;
  for (let y = 0; y <= grid * 10; y += grid) {
    for (let x = 0; x <= grid * 10; x += grid) {
      for (let z = 0; z <= grid * 10; z += grid) {
        push();
        fill(random(255), random(255), random(255), 100);
        translate(x, y, z);
        box(grid, map(sin(frameCount * 0.005), -1, 1, -grid, grid), grid);
        pop();
      }
    }
  }
}
