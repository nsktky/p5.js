let isPlaying = false;
let osc, osc2, osc3, amp;
let x, y, radius, seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  radius = width * 0.3
  noFill()
  seed = random(1000000000000000);
  let size = min(width, height);
  textSize(size*0.1);
  textAlign(CENTER, CENTER);
  stroke(255);
  fill(255);
  text('click to play', width / 2, height / 2);

  osc = new p5.Oscillator('square');
  osc2 = new p5.Noise('pink');
  osc3 = new p5.Oscillator('sine');
}

function draw() {
  // background(20);
  randomSeed(seed);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
  if(isPlaying) {
    background(20);
    osc.freq(map(sin(frameCount*0.8),-1,1,200,300));
    osc3.freq(map(tan(frameCount*0.02), -1, 1, 100, 300));
    osc.amp(amp, 0.1);
    osc3.amp(amp, 0.1);

    for(let i = 0; i < 10; i++) {
      move(random(width), random(height));
    } 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  isPlaying = true;
  osc.start();
  osc2.start();
  osc3.start();
}

function mouseReleased() {
  isPlaying = false;
  osc.stop();
  osc2.stop();
  osc3.stop();
  background(20);
}


function move(px, py) {
  push();
  translate(px, py);
  beginShape()
  for(let i = 0; i < 360; i++) {
    let xoff = map(sin(i), -1, 1, 0, 1)
    let yoff = map(cos(i), -1, 1, 0, 1)
    let angle = map(noise(xoff, yoff, frameCount*0.01), 0,1,0,360)

    x = radius * 0.15 * (sin(angle) + cos(i))
    y = radius * 0.15 * (sin(i) - tan(frameCount*0.01 + px - py))
    noFill();
        stroke(250, 190, 20)
    vertex(x, y)
  }
  endShape(CLOSE)
  pop();
}