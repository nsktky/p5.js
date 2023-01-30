let img;
let col = ["#005481", "#19a591", "#b2d6b5", "#afc0e2", "#a4c8c2", "#9b6cab", "#5a6d8f", "#37a0c8", "#eef1f7"]
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  img = createGraphics(width, height);
  img.background(255);

  for(let i = 0; i < 10000; i++) {
    let x = random(width*0.3, width*0.7)
    let y = random(height*0.1, width*0.9)
    let c = random(col)
    let p = createVector(x, y, c)
    points.push(p);
  }

}

function draw() {
  // background(0)
  door()
  Shadow();
}

function door() {
  img.erase();
  img.rect(img.width*0.5, img.height*0.7, img.width*0.1, -img.width*0.25);
  img.noErase();
  universe();
  image(img, 0, 0)
}

function Shadow() {
  fill(70);
  beginShape();
  vertex(img.width*0.5, img.height*0.7);
  vertex(img.width*0.6, img.height*0.7);
  vertex(img.width*0.4, img.height*0.72);
  vertex(img.width*0.3, img.height*0.72);
  endShape(CLOSE);
}

function universe() {
  for(let i = 0; i < points.length; i++) {
    let angle = map(noise(points[i].x, points[i].y, frameCount), 0, 1, 0, 100);
    points[i].x += tan(angle) * 5
    points[i].y += cos(angle) * 5
    let c = color(points[i].z);

    if(points[i].x > width) points[i].x = random(width*0.3, width*0.7)
    if(points[i].x < 0) points[i].x = random(width*0.3, width*0.7)
    if(points[i].y > height) points[i].y = random(height*0.1, width*0.9)
    if(points[i].y < 0) points[i].y = random(height*0.1, width*0.9)

    
    fill(c)
    circle(points[i].x, points[i].y, 2)
    c.setAlpha(10)
    fill(c)
    circle(points[i].x, points[i].y, 10)
  }
}