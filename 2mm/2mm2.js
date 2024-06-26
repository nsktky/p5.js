let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(255);
  for (let i = 0; i < 1000; i++) {
    let angle = map(noise(i), 0, 1, 0, 360);
    let p = createVector(random(width), random(2, height), angle);
    particles.push(p);
  }
  noStroke();
  // angleMode(DEGREES)
}

function draw() {
  // background(255, 100);
  // rotate(frameCount)
  for (let i = 0; i < particles.length; i++) {
    particles[i].x = particles[i].x + sin(particles[i].z) * random(-10, 10);
    particles[i].y = particles[i].y - cos(particles[i].z) * random(-1, 1);

    if (particles[i].x > width) particles[i].x = 0;
    if (particles[i].x < 0) particles[i].x = width;
    if (particles[i].y > height) particles[i].y = 2;
    if (particles[i].y < 1) particles[i].y = height;

    let r = random(30);
    let g = random(60);
    let b = random(20);
    fill(r, g, b, 4);

    let size = random(10);
    let shapeType = int(random(3));

    switch (shapeType) {
      case 0:
        rect(particles[i].x, height - particles[i].y, size);
        break;
      case 1:
        ellipse(particles[i].x, particles[i].y, size);
        break;
      case 2:
        triangle(particles[i].x, height - particles[i].y, particles[i].x + size / 2, height - particles[i].y - size / 2, particles[i].x - size / 2, height - particles[i].y - size / 2);
        break;
    }
  }
}