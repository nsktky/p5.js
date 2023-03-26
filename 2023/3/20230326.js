// 粒子の数
const NUM_PARTICLES = 600;

// 粒子の配列
let particles = [];

// 引力定数
const GRAVITY = 0.003;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)
  rectMode(CENTER)
  noStroke();
  // colorMode(HSB, 100, 100, 100, 100)
  
  // 粒子を生成する
  for (let i = 0; i < NUM_PARTICLES; i++) {
    let particle = {
      position: createVector(random(width), random(height)),
      velocity: createVector(random(-2, 2), random(-2, 2)),
      acceleration: createVector(0, 0),
      mass: random(20),
      color: color(random(255), 100, 100, 100)
    };
    particles.push(particle);
  }
}

function draw() {
  background(255);
  
  // 粒子を描画する
  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    let col = map(noise(particle.position.x, particle.position.y, frameCount*0.01), 0, 1, 0, 255)
    fill(col, particle.position.x - particle.position.y, particle.mass*10);
    circle(particle.position.x, particle.position.y, particle.mass);
    
    // 互いに引き合う力の影響を与える
    for (let j = 0; j < particles.length; j++) {
      if (i !== j) {
        let otherParticle = particles[j];
        let distance = particle.position.dist(otherParticle.position);
        let forceMagnitude = GRAVITY * particle.mass * 100 * otherParticle.mass * tan(frameCount*0.01) / (distance + frameCount);
        let force = p5.Vector.sub(otherParticle.position, particle.position);
        force.setMag(forceMagnitude);
        particle.acceleration.add(force);
      }
    }
    
    // 加速度から速度を更新する
    particle.velocity.add(particle.acceleration);
    particle.velocity.limit(6);
    
    // 速度から位置を更新する
    particle.position.add(particle.velocity);
    
    // 加速度をリセットする
    particle.acceleration.mult(0);
    
    // 粒子が画面外に出た場合、反対側に移動させる
    if (particle.position.x > width) {
      particle.position.x = random(width);
    }
    if (particle.position.x < 0) {
      particle.position.x = random(width);
    }
    if (particle.position.y > height) {
      particle.position.y = random(height);
    }
    if (particle.position.y < 0) {
      particle.position.y = random(height);
    }
  }
}
