let mic, fft;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);

  background(20);
  rectMode(CENTER);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  let micLevel = mic.getLevel();
  let spectrum = fft.analyze();

  fill(spectrum[0], 100, 100, 100);
  stroke(spectrum[1], 100, 80, 100);

  push();
  translate(width / 2, height / 2);
  rotate(frameCount);
  rect(0, 0, map(micLevel, 0, 1, width * 0.1, width * 5));
  pop();

  window.addEventListener("resize", setup);
}