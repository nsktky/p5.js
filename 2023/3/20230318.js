let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)
  for (let i = 0; i < 3000; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(255, 10);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor() {
    this.position = createVector(random(), random());
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = random(1, 3);
  }

  update() {
    let gravity = createVector(width/2, map(cos(frameCount*0.03), -1, 1, -height, height*2));
    gravity.sub(this.position);
    let distance = gravity.mag();
    distance = constrain(distance, 5, 25);
    let force = 1 * this.mass / (distance * distance);
    gravity.normalize();
    gravity.mult(force);
    this.acceleration = gravity;

    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
  }

  show() {
    noStroke();
    fill(0);
    ellipse(this.position.x, this.position.y, 3);
  }
}