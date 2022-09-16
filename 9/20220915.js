let size, count, seed;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(200);
  angleMode(DEGREES);
  size = 100;
  count = 0;
  seed = random(10000000000000);
  noStroke();
}

function draw() {
  randomSeed(seed);
  background(20);
  orbitControl();
  translate(-width * 0.1, width * 0.1, 0);
  rotateX(-40);
  rotateY(120);

  ambientLight(100);
  pointLight(255, 255, 255, 0, -500, 200);
  for (let z = 1; z < size * 10; z += size) {
    for (let x = 1; x < size * 10; x += size) {
      push();
      translate(x, 0, z);
      specularMaterial(250, 190, 20);
      box(size, size + count * noise(z * x), size);
      pop();
      count += random(0.0001, 0.04);
    }
  }
}
