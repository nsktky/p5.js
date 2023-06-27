class Lightning {
  constructor() {
    this.path = [];
    this.isAlive = true;
    this.maxSteps = random(10, height*0.4); // 雷の最大の長さ
    this.noiseScale = 1; // パーリンノイズのスケール
    this.reset();
    blendMode(DIFFERENCE)
    colorMode(HSB, 360, 100, 100, 255)
  }

  reset() {
    this.path = [];
    let start = createVector(random(width), 0);
    this.path.push(start);
    this.noiseOffset = random(100);
    this.currentStep = 0;
    this.opacity = 255;
    this.speed = random(5, 20); // 追加: 雷のスピード
    this.isAlive = !this.isAlive
  }

  generateStep() {
    let lastPoint = this.path[this.path.length - 1];
    let newX = lastPoint.x + map(noise(this.noiseOffset), 0, 1, -25, 25);
    let newY = lastPoint.y + map(noise(this.speed), 0, 1, 0, 15); // スピードに応じてY座標を更新
    let newPoint = createVector(newX, newY);
    this.path.push(newPoint);
    this.noiseOffset += this.noiseScale;
    this.currentStep++;
    this.opacity -= (350 / this.maxSteps);
    if (this.currentStep >= this.maxSteps) {
      this.isAlive = false;
    }
  }

  update() {
    if (this.isAlive) {
      this.generateStep();
    } else {
      this.reset();
    }
  }

  draw() {
    stroke(this.currentStep, this.noiseOffset, this.opacity, this.opacity);
    noFill();
    beginShape();
    for (let point of this.path) {
      vertex(point.x, point.y);
      // vertex(-point.x, point.y);
      vertex(point.x+100, point.y+100);
    }
    endShape();
  }
}

let lightningBolts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    lightningBolts[i] = new Lightning();
  }
  strokeWeight(10)
}

function draw() {
  background(0);
  for (let bolt of lightningBolts) {
    bolt.update();
    bolt.draw();
  }
}

function keyPressed() {
  if (key == 's'){
    saveCanvas('20230627', 'png');
  }
}
