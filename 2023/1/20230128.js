let font;
let texts = ["アイスクリームが食べたい", "これなら食べれる", "おいしいなぁ", "待ち遠しかった", "足がジンジンして痛い", "熱もある", "もうおれは長くない", "ありがとうなぁ", "家族みんなで", "なかよくせなぞ"];
let letters = [];
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

  frameRate(0.1)
}

function draw() {
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
}