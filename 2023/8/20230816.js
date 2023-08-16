let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    particles[i] = new Particle();
  }
  rectMode(CENTER)
  noFill();
}

function draw() {
  background(0, 1);
  for (let particle of particles) {
    particle.update();
    particle.show();
    particle.checkParticles(particles);
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-1, 1), random(-1, 1));
  }

  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  show() {
    noStroke();
    ellipse(this.pos.x, this.pos.y, 1);
  }

  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  checkParticles(particles) {
    let distances = [];
    for (let other of particles) {
      if (other != this) {
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        distances.push({ particle: other, distance: d });
      }
    }
    distances.sort((a, b) => a.distance - b.distance);
    for (let i = 0; i < 3; i++) {
      strokeWeight(1)
      let d = dist(this.pos.x, this.pos.y, width / 2, height / 2);
      stroke(d * 0.8, d * 0.4, d * 0.7);
      rect(distances[i].particle.pos.x, distances[i].particle.pos.y, d * 0.5);
      stroke(0)
      line(this.pos.x, this.pos.y, distances[i].particle.pos.x, distances[i].particle.pos.y)
      stroke(d * 0.5, d * 0.1, d * 0.3);
      rect(this.pos.x, this.pos.y, d * 0.3);
    }
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20230816-2', 'png');
  }
}
