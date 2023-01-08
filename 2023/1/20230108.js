let R = (a=1)=>Math.random()*a;
let L = (x, y)=>(x*x*x*x+y*y*y)**0.9;
let colorPalette = ["#FFFFFF", "#1C1412", "#473D3E", "#C49C6B", "#BFC1CE", "#7C7684", "#948CA1", "#D7D6DE", "#645D64"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(colorPalette[1]);
}

function draw_circle([x, y], r, c) {
  noStroke();
  fill(c);
  circle((x+1)*width/2, (y+1)*height/2, r/2);
}

function sdf_circle([x, y], [cx, cy], r) {
  x -= cx;
  y -= cy;
  return L(x, y) - r;
}

function sdf([x, y]) {
  let bal = sdf_circle([x, y], [0, 0], 0.1);
  for(let i = 1; i < 5; i++) {
    bal = abs(bal) - 0.005 * i
  }
  return bal
}

function draw() {
  fill(255, 0, 0, 0.51)
  circle(width / 2, height / 6, width*0.1)
  noFill()
  for(let k = 0; k < 2000; k++) {
    let p = [R(2)-1, R(2)-1];
    let d = sdf(p);
    let col = "#000";
    if(d < - 0.01) col = colorPalette[4];
    if(d > 0.1) col = colorPalette[3];
    draw_circle(p, 6, col);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}