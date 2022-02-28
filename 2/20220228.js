let today;
let after_100years;
let rest_time;

let font;

function preload() {
  font = loadFont("DotGothic16-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  after_100years = new Date(2122, 2-1, 28, 20, 00);
  textAlign(CENTER, CENTER);
  textFont(font);
}

function draw() {
  background(97,38,70);
  today = new Date();
  rest_time = after_100years - today;

  fill(232,210,190);
  noStroke();
  textSize(width/10);

  if (rest_time > 0){
    text(rest_time, width*0.5, height*0.5);
  } else {
///////////////////////////////////////////////////////////////////
/////////////////////////ここから先は見ないでね/////////////////////////
//////////////////////////////////////////////////////////////////
































































    background(230,153,170);
    fill(242,222,232);
    noStroke();
    textSize(width/35);
    letter = "覚えていてくれてありがとう。\nあなたが平和で健やかに生きていることを、100年前から祈っています。"
    text(letter, width*0.5, height*0.5)
  }
}