let R = (a=1)=>Math.random()*a;
let L = (y, x)=>(x*x*x-y*y*y-x/y*y)**4;

function preload() {
  budImg = loadImage("bud.png")
  leafImg = loadImage("leaf.png")
  flowerImg = loadImage("flower.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  budImg.loadPixels();
  leafImg.loadPixels();
  flowerImg.loadPixels();
}

function draw_image([x, y], i) {
  tint(255, 20)
  image(i, (x+1)*width/2, (y+1)*height/2);
}

function sdf_circle([x, y], [cx, cy], r) {
  x -= cx;
  y -= cy;
  return L(x, y) - r;
}

function sdf([x, y]) {
  let bal = sdf_circle([x, y], [0, 0], 0.1);
  for(let i = 1; i < 5; i++) {
    bal = abs(bal) - 0.01 * i
  }
  return bal
}

function draw() {
  for(let k = 0; k < 10; k++) {
    let p = [R(2)-1, R(2)-1];
    let d = sdf(p);
    let i = flowerImg;
    if(d < - 0.01) i = leafImg;
    if(d > 0.1) i = budImg;
    draw_image(p, i);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}