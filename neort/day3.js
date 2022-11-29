let points = [];
let grid;

function setup() {
    createCanvas(11012, 1080);
    pixelDensity(1);

    grid = width / 150
    rectMode(CENTER);
    colorMode(HSB, 360, 100, 100, 100);
    background(0);
    noStroke();
  
    for (let y = 0; y <= height + grid; y += grid) {
      for (let x = 0; x <= width + grid; x += grid) {
        let p = createVector(x, y);
        points.push(p);
      }
    }
  }
  
  function draw() {
    background(0)
    for (let i = 0; i < points.length; i++) {
      let h = map(noise(points[i].x * 0.01, points[i].y * 0.01, frameCount*0.05),0,1,0,480);
      let s = map(noise(points[i].x * 0.1, points[i].y * 0.1, frameCount*0.05),0,1,0,100);
      fill(h, s, 30, 100)
      noStroke()
      rect(points[i].x, points[i].y, grid*0.8, grid*0.8, grid*0.1, grid*0.1);
      fill(h, s, 100, 100)
      stroke(h, 100, 100, 100)
      circle(points[i].x - grid * 0.2 + sin(frameCount*0.1) * grid*0.1, points[i].y - grid*0.25, grid*0.1);
      circle(points[i].x + grid * 0.2 + sin(frameCount*0.1) * grid*0.1, points[i].y - grid*0.25, grid*0.1);
      ellipse(points[i].x + sin(frameCount*0.1) * grid*0.1, points[i].y - grid*0.1, grid*0.2, grid*0.03);
      fill(0);
      noStroke();
      ellipse(points[i].x, points[i].y + grid*0.3, grid*0.7, grid*0.5);
    }
  }
  