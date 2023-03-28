let slimeMolds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100)
  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    let z = random(360)
    slimeMolds.push(new SlimeMold(x, y, z));
  }
}

function draw() {
  blendMode(OVERLAY)
  for (let mold of slimeMolds) {
    mold.grow();
    mold.display();
  }

  // 新しい粘菌の繁殖
  if (frameCount % 20 === 0) {
      let parent = random(slimeMolds);
      let child = new SlimeMold(parent.pos.x + random(-10, 10), parent.pos.y + random(-10, 10));
      slimeMolds.push(child);
    }
    
    // 画面の端からはみ出した粘菌を削除
    slimeMolds = slimeMolds.filter(mold => {
      return (
        mold.pos.x > 0 &&
        mold.pos.x < width &&
        mold.pos.y > 0 &&
        mold.pos.y < height
      );
    });
    
    // 粘菌の数が一定数を超えたら削除
    if (slimeMolds.length > 200) {
      slimeMolds.shift();
    }
}

    // 粘菌オブジェクト
class SlimeMold {
  constructor(x, y, z) {
    this.pos = createVector(x, y);
    this.size = 5;
    this.growthRate = random(0.01, 0.1);
    this.col = color(z, 100, 100, 100)
  }

  grow() {
    this.size += this.growthRate;
  }

  display() {
    fill(this.col);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
