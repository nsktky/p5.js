let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB, 100, 100, 100, 100);
  background(0, 0, 20);
  noStroke();

  for(let i = 0; i < 20000; i++) {
    let x = random(width);
    let y = random(height);
    let size = random();
    let p = createVector(x, y, size);
    particles.push(p);
  }
}

function draw() {
  background(0, 0, 20, 30);
  for(let i = 0; i < particles.length; i++) {
    let angle = map(noise(particles[i].x, particles[i].y, frameCount*0.001), 0, 1, 0, 360);
    let p = createVector(sin(angle), cos(angle), tan(angle)/10000);
    particles[i].add(p);
    fill(angle);
    rect(particles[i].x, particles[i].y, particles[i].z);
  }
}