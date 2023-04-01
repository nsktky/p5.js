const numParticles = 20;
const particles = [];
let fieldStrength = 0.01;
let size

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);

  size = min(width, height);
  
  for (let i = 0; i < numParticles; i++) {
    let x = random(width*0.4, width*0.6)
    let y = random(height*0.4, height*0.6)
    let z = random(-size*0.15, size*0.15)
    particles.push(new Particle(x, y, z));
  }
}

function draw() {
  background(0);
  rotateX(frameCount * 0.008);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.001);


  for (let p of particles) {
    const force = getFieldForce(p.pos);
    p.applyForce(force);
    p.update();
    p.display();
    p.edges();
  }

  fieldStrength *= 1.003

  if(fieldStrength > 100) fieldStrength = 0.01
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
    this.hue = map(noise(this.pos.x, this.pos.y, frameCount), 0, 1, 0, 360);
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
    // noFill();
    // stroke(255);
    // box(size*0.5);

    push();
    stroke(this.hue, 20, 100, 100);
    // strokeWeight(2);
    translate(this.pos.x - width / 2, this.pos.y - height / 2, this.pos.z);
    noFill()
    box(100);
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
