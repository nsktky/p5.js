let pendulums = [];
let numPendulums = 200

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);

  // 振子の初期化
  for (let i = 1; i < numPendulums; i++) {
    let y = map(i, 0, numPendulums, 0, height);
    pendulums.push(new Pendulum(width * 0.5, y, i * 10));
  }
}

function draw() {
  background(220, 20);
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
    this.angle = 10;
    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.99999; // 摩擦
    this.ballRadius = 10.0;
    this.gravity = 0.1; // 重力
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
    this.angle += this.aVelocity; // 角度を速度で増加
  }

  display() {
    stroke(0);
    strokeWeight(2);
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    // ellipse(this.position.x, this.position.y, this.ballRadius, this.ballRadius);
  }
}



function keyPressed() {
  if (key == 's'){
    saveCanvas('20230924-2', 'png');
  }
}