// https://note.com/deconbatch/n/nf95e4289d23f?magazine_key=mc896e04ffdb5
// 参考になりました.ありがとうございます!

var plotMax = 1;
var xyStep = 6;
var noiseStep = 0.001;
var timeStep = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 200, 150, 255);
  frameRate(30);
  w = width
  h = height
}

function draw() {
  background(0, 0, 90, 100);
  translate(w * 0.5, h * 0.5);
  noStroke();
  fill(150, 90, 30, 255);
  
  for (let ox = -w * 0.5; ox <= w * 0.5; ox += xyStep * plotMax) {
    for (let oy = -h * 0.5; oy <= h * 0.5; oy += xyStep * plotMax) {
      let x = ox;
      let y = oy;
	  for (let plotCnt = 0; plotCnt < plotMax; plotCnt++) {
		let theta = floor(250 * noise(w + x * noiseStep, h + y * noiseStep, frameCount * timeStep));
		x += xyStep * cos(theta);
		y += xyStep * sin(theta);
		ellipse(x, y, xyStep, xyStep);
	  }
	}
  }
}