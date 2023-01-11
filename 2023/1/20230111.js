let R = (a=1)=>Math.random()*a;
let L = (x, y)=>(x*x+y*y)**0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fff");
  rectMode(CENTER)
}

function draw_rect([x, y], r, c) {
  noStroke();
  fill(c);
  rect((x+1)*width/2, (y+1)*height/2, r, r);
}

function sdf_circle([x, y], [cx, cy], r) {
  x -= cx;
  y -= cy;
  return L(x, y) - r;
}

function sdf([x, y]) {
  let bal = sdf_circle([x, y], [0, 0], 0.5);
  let lin = y * 0.3
  let lin2 = -y * x * x + y * frameCount*0.001
  return min(0, lin2)
}

function draw() {
  noFill()
  for(let k = 0; k < 2000; k++) {
    let p = [R(2)-1, R(2)-1];
    let d = sdf(p);
    let col = "#000";
    if(d < - 0.01) col = "#fff";
    if(d < - 0.1) col = "#000";
    draw_rect(p, 10, col);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}