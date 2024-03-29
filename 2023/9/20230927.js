let pendulums = [];
let numPendulums = 100

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
  background(220);

  // 振子の初期化
  for (let i = 1; i < numPendulums; i++) {
    let y = map(i, 0, numPendulums, 0, height);
    pendulums.push(new Pendulum(width * 0.5, height * 0.5, i * 10));
  }
}

function draw() {
  background(220, 1);
  // rotate(1)
  for (let pendulum of pendulums) {
    pendulum.update();
    pendulum.display();
  }
}

class Pendulum {
  constructor(x, y, armLength) {
    this.origin = createVector(x, y);
    this.position = createVector();
    this.armLength = armLength;
    this.angle = PI;
    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.99; // 摩擦
    this.ballRadius = 1.0;
    this.gravity = 30; // 重力
  }

  update() {
    // 角度の加速度を計算
    this.aAcceleration = (-this.gravity / this.armLength) * sin(this.angle);
    this.position.set(
      this.origin.x + this.armLength * sin(this.angle),
      this.origin.y + this.armLength * cos(this.angle)
    );
    this.aVelocity += this.aAcceleration; // 速度を加速度で増加
    this.aVelocity *= this.damping; // 速度を減少
    this.angle += this.aVelocity - this.origin.y / 20; // 角度を速度で増加
    this.ballRadius += 0.05
  }

  display() {
    stroke(0);
    strokeWeight(1);
    // line(this.origin.x, this.origin.x, this.position.x, this.position.y);
    rect(this.position.x, this.position.y, this.ballRadius, this.ballRadius);
  }
}



function keyPressed() {
  if (key == 's'){
    saveCanvas('20230927-2', 'png');
  }
}