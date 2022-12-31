let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noiseDetail(1);
  background(70);

}

function draw() {
  background("#f19594");
  noStroke();
  translate(width / 2, height / 2);
  let space = 0.1

  for(let j = 0; j < 10; j ++){
    noFill();
    stroke("#c0dea7");
    strokeWeight(j*2);
    circle(0,0,j*200);
  }

  for(let i = 0; i < 360; i += space){
    rotate(space);

    let x = map(sin(i), -1, 1, 0, 3);
    let y = map(cos(i), -1, 1, 0, 3);
    let a = noise(x + start, y + start);
    let h = map(a, 0, 1, width*0.001, width*0.15);
    noStroke();
    fill("#fff")
    rect(h, 0, h*10, 1);
  }
    start += 0.003;

}