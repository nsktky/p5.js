let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)
  angle = PI / 5; // 分岐の角度を設定
}

function draw() {
  background(255, 10);
  stroke(0);
  translate(width / 2, height); // 座標原点を画面下部中央に移動
  branch(height*0.25); // ツリーの最初の枝を描画
}

// 再帰的に枝を描画する関数
function branch(len) {
  // 枝を描画
  line(0, 0, 0, -len);
  translate(8, -len);

  if (len > 6) { // 停止条件
    // 右の枝を描画
    push();
    rotate(angle);
    branch(len * 0.67 + sin(frameCount*0.01));
    pop();

    // 左の枝を描画
    push();
    rotate(-angle);
    branch(len * 0.8);
    pop();
  }
}
