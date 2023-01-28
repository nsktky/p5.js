let R = (a=1)=>Math.random()*a;
let L = (x, y)=>(x*x/y*y)**0.1;
let colorPalette = ["#FFFFFF10", "#1C141210", "#473D3E10", "#C49C6B10", "#BFC1CE10", "#7C768410", "#948CA110", "#bb404010"]

function setup() {
  let size = min(windowWidth, windowHeight)
  createCanvas(windowWidth, windowHeight);
  background(0);

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
  let bal = sdf_circle([x, y], [0, 0], 0.5);
  let bal2 = sdf_circle([x, y], [0, 0], 0.5);
  bal = abs(bal) - 0.01
  bal2 = bal2 ** bal
  return min(bal, bal2)
}

function draw() {
  for(let k = 0; k < 2000; k++) {
    let p = [R(2)-1, R(2)-1];
    let d = sdf(p);
    let col = "#00000010";
    if(d < 0.6) col = colorPalette[2];
    if(d < 0.5) col = colorPalette[3];
    if(d < 0.4) col = colorPalette[4];
    if(d < 0.3) col = colorPalette[5];
    if(d < 0.2) col = colorPalette[6];
    if(d < 0.1) col = colorPalette[7];
    if(d < 0.01) col = colorPalette[0];
    draw_circle(p, frameCount, col);
  }
  

}