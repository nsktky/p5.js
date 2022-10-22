let sound;
let grid

function preload() {
  sound = loadSound("piko.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(255);
  noFill();
  stroke(0);

  grid = width / 10
}

function draw() {
  background(255, 50)
  if (mouseIsPressed) {
    if (sound.isPlaying() == false) {
      sound.play();
    }
    let speed = map(mouseX, 0, width, 0.1, 2);
    sound.rate(speed);

    for(let y = 0; y <= height + grid; y += grid){
      for(let x = 0; x <= width + grid; x += grid) {
        push();
        translate(x, y)
        rotate(frameCount*map(speed, 0.1, 2, 0.1, 10))
        rect(0,0, grid*0.8);
        pop();
      }
    }
  } else {
    sound.stop();
  }
}
