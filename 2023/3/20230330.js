const numParticles = 1000;
const particles = [];
const fieldStrength = 1;
let size

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);

  size = min(width, height);
  
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(random(width*0.4, width*0.6), random(height*0.4, height*0.6), random(-size*0.1, size*0.1)));
  }
}

function draw() {
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);


  for (let p of particles) {
    const force = getFieldForce(p.pos);
    p.applyForce(force);
    p.update();
    p.display();
    p.edges();
  }
}

function getFieldForce(pos) {
  const x = map(pos.x, size*0.35, size*0.65, 0, 1);
  const y = map(pos.y, size*0.35, size*0.65, 0, 1);
  const z = map(pos.z, -size*0.15, size*0.15, 0, 1);
  const noiseValue = noise(x, y, z);

  const angle = noiseValue * TWO_PI * 4;
  const force = p5.Vector.fromAngle(angle);
  force.mult(fieldStrength);

  return force;
}

class Particle {
  constructor(x, y, z) {
    this.pos = createVector(x, y, z);
    this.vel = createVector();
    this.acc = createVector();
    this.hue = random(255);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    noFill();
    stroke(255);
    box(size*0.5);

    push();
    stroke(360, 0, 100, 100);
    // strokeWeight(2);
    translate(this.pos.x - width / 2, this.pos.y - height / 2, this.pos.z);
    box(5);
    pop();
  }

  edges() {
    if (this.pos.x > width*0.65) this.pos.x = width*0.35;
    if (this.pos.x < width*0.35) this.pos.x = width*0.65;
    if (this.pos.y > height*0.65) this.pos.y = height*0.35;
    if (this.pos.y < height*0.35) this.pos.y = height*0.65;
    if (this.pos.z > size*0.15) this.pos.z = -size*0.15;
    if (this.pos.z < -size*0.15) this.pos.z = size*0.15;
  }
}
