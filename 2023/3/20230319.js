let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  colorMode(HSB, 360, 100, 100, 100)
  for (let i = 0; i < 2000; i++) {
    particles.push(new Particle());
  }
  // blendMode(DIFFERENCE)
}

function draw() {
  // background(0, 10);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor() {
    this.position = createVector(0, random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = random(1, 3);
  }

  update() {
    let gravity = createVector(width/2, height/2);
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
    let col = map(noise(this.velocity.x, this.velocity.y, frameCount*0.01), 0, 1, 0, 600)
    fill(col , 100, 100, 100);
    rect(this.position.x, this.position.y, 3);
  }
}