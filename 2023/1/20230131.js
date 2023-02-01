let img;
let col = ["#005481", "#19a591", "#b2d6b5", "#afc0e2", "#a4c8c2", "#9b6cab", "#5a6d8f", "#37a0c8", "#eef1f7"]
let points = [];
let x, y, radius;

let R = (a=1)=>Math.random()*a;
let L = (x, y)=>(x*x+y*y)**0.5;


function preload() {
  girlImg = loadImage("20230106.png")
}


function setup() {
  let size = min(windowWidth, windowHeight)
  createCanvas(size, size);
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  img = createGraphics(width, height);
  img.background(255);

  girlImg.loadPixels();
  girlImg.resize(width*0.3, height*0.4)

  for(let i = 0; i < 100; i++) {
    let x = random(width)
    let y = random(height)
    let c = random(col)
    let p = createVector(x, y, c)
    points.push(p);
  }
  radius = width * 0.003
}

function draw() {
  universe();
  psy();
  bubble();
  reflection();
  loops();
  girl(width*0.01, height*0.4);
  girl(width*0.99, height*0.4, 1);
}

function universe() {
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x, points[i].y, frameCount), 0, 1, 0, 100);
    points[i].x += tan(angle) * 5
    points[i].y += cos(angle) * 5
    let c = color(points[i].z);

    if(points[i].x > width) points[i].x = random(width)
    if(points[i].x < 0) points[i].x = random(width)
    if(points[i].y > height) points[i].y = random(height)
    if(points[i].y < 0) points[i].y = random(height)

    fill(c)
    circle(points[i].x, points[i].y, 100)
  }
}

function loops() {
  push();
  translate(width/2, height/2);
  for(let i = 0; i < 100; i++) {
    let xoff = map(cos(i), -1, 1, 0, 360)
    let yoff = map(sin(i), -1, 1, 0, 360)
    x = radius * i * cos(xoff - frameCount)
    y = radius * i * sin(yoff + frameCount)
    fill(xoff, i, yoff)
    circle(x, y, radius*50)
  }
  pop();
}

function psy() {
  blendMode(DIFFERENCE);
  push();
  translate(width / 2, height / 2);
  rotate(frameCount*10)
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x, points[i].y, frameCount), 0, 1, 0, 600);
    points[i].add(createVector(sin(angle), cos(angle)));
    fill(angle*0.8, angle*1.2, angle*0.7)
    rect(points[i].x, points[i].y, 200);
  }
  pop();
}

function girl(ox, oy, f) {
  for (let i = 0; i < 36; i++){
    let xoff = map(sin(i), -1, 1, 0, 0.01)
    let yoff = map(cos(i), -1, 1, 0, 0.01)
    let angle = map(noise(xoff, yoff, frameCount*0.005), 0, 1, 0, 360)
    push();
    translate(ox, oy)
    x = i * tan(angle * frameCount*0.005)
    y = i * cos(i + angle)
    if(f == 1) scale(-1, 1)    
    image(girlImg, x, y * 20)
    pop();
  }
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


function bubble () {
  for(let k = 0; k < 200; k++) {
    let p = [R(2)-1, R(2)-1];
    let d = sdf(p);
    c = col[0]
    if(d < 0.3) c = col[4];
    draw_circle(p, frameCount*3, c);
  }
}

function reflection() {
  push();
  translate(width / 2, height / 2);
  beginShape();
  for(let i = 0; i < 36; i++) {
    x = radius * 140 * sin(i * frameCount);
    y = radius * 140 * cos(i * frameCount);
    let c = map(noise(x, y, frameCount), 0, 1, 100, 600);
    fill(c, c*0.8, c*1.2);
    vertex(x, y);
    vertex(-x, y);
    vertex(-x, -y);
  }
  endShape(CLOSE);
  pop();
}