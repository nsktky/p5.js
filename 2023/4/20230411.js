let particles = []

function setup() {
  createCanvas(100, 100);
  rectMode(CENTER)
  // angleMode(DEGREES)
  background(255)
  for(let i = 0; i < 5000; i++){
    let angle = map(noise(i), 0, 1, 0, 360)
    let p = createVector(random(width), random(2, height), angle);
    particles.push(p);
  }
  noStroke();
}

function draw() {
  background(255, 10)
  for(let i = 0; i < particles.length; i++){
    particles[i].x = particles[i].x + sin(particles[i].z)
    particles[i].y = particles[i].y * cos(particles[i].z)
    if(particles[i].x > width) particles[i].x = 0
    if(particles[i].x < 0) particles[i].x = width
    if(particles[i].y > height) particles[i].y = 2
    if(particles[i].y < 1) particles[i].y = height
    fill(0)
    rect(particles[i].x, height-particles[i].y, 5)
  }
}
