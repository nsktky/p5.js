let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  noFill()
  angle = PI / 5; // 分岐の角度を設定
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  // background(255, 10);
  rectMode(CENTER)
  translate(width / 2, height); // 座標原点を画面下部中央に移動
  branch(height*0.25); // ツリーの最初の枝を描画
}

// 再帰的に枝を描画する関数
function branch(len) {
  // 枝を描画
  circle(0, 0, len);
  translate(frameCount*0.1, -len);

  if (len > 10) { // 停止条件
    // 右の枝を描画
    let hue = map(noise(len, frameCount*0.01), 0, 1, 0, 60)
    stroke(hue, 100, 100, 100)
    push();
    rotate(angle);
    branch(len * 0.67 + sin(frameCount*0.01));
    pop();

    // 左の枝を描画
    push();
    rotate(-angle);
    branch(len * 0.67  + cos(frameCount*0.05));
    pop();
  }
}
