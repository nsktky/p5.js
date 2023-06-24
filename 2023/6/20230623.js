class Lightning {
  constructor() {
    this.path = [];
    this.isAlive = true;
    this.maxSteps = random(10, height); // 雷の最大の長さ
    this.noiseScale = 1; // パーリンノイズのスケール
    this.reset();
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
    this.opacity -= (255 / this.maxSteps);
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
    stroke(255, 255, 255, this.opacity);
    noFill();
    beginShape();
    for (let point of this.path) {
      vertex(point.x, point.y);
    }
    endShape();
  }
}

let lightningBolts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 30; i++) {
    lightningBolts[i] = new Lightning();
  }
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
    saveCanvas('20230624', 'png');
  }
}
