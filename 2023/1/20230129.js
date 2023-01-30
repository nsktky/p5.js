let font;
let texts = ["アイスクリームが食べたい", "これなら食べれる", "おいしいなぁ", "待ち遠しかった", "足がジンジンして痛い", "熱もある", "もうおれは長くない", "ありがとうなぁ", "家族みんなで", "仲良くせなぞ"];
let size;
let lineNum, textNum
let letter

function preload() {
  font = loadFont("NotoSerifJP-Black.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textFont(font);
  noStroke();
  colorMode(HSB, 360, 100, 100)
  // textAlign(CENTER, CENTER);
  size = width / 100;
  lineNum = height / 20;
  letter = ""

  for(let i = 0; i < lineNum; i++) {
    let textNum = int(random(1, 10))
    for(let j = 0; j < textNum; j++) {
      letter = letter + random(texts);
    }
    letter = letter + "。"
    textSize(size);
    text(letter, width*0.05, height*0.05+i*lineNum);
    letter = ""
  }
  blendMode(DIFFERENCE);

}

function draw() {
  letter = ""

  for(let i = 0; i < lineNum; i++) {
    let textNum = int(random(1, 20))
    for(let j = 0; j < textNum; j++) {
      letter = letter + random(texts);
    }
    let h = map(noise(letter.length, frameCount), 0, 1, 0, 360)
    let s = map(noise(letter.length, frameCount*0.01), 0, 1, 0, 100)
    let b = map(noise(letter.length, frameCount*0.1), 0, 1, 0, 100)
    fill(h, s, b, 100)
    letter = letter + "。"
    textSize(size*random(5));
    text(letter, tan(frameCount)*100, i*lineNum+tan(frameCount)*100);
    letter = ""
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}