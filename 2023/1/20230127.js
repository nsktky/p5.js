let R = (a=1)=>Math.random()*a;
let L = (x, y)=>(x*x+y*y)**0.5;
let colorPalette = ["#FFFFFF", "#1C1412", "#473D3E", "#C49C6B", "#BFC1CE", "#7C7684", "#948CA1", "#D7D6DE", "#645D64"]

function setup() {
  let size = min(windowWidth, windowHeight)
  createCanvas(size, size);
  background(colorPalette[2]);
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
  bal = abs(bal) - 0.2
  bal2 = bal2 ** bal
  return min(bal, bal2)
}

function draw() {
  for(let k = 0; k < 2000; k++) {
    let p = [R(2)-1, R(2)-1];
    let d = sdf(p);
    let col = "#000";
    if(d < 0.3) col = colorPalette[4];
    draw_circle(p, frameCount, col);
  }

}