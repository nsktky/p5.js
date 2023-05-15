const points = [];
const pointNumber = 10000;
let voronoi;
let delaunay;
let ox, oy, speedX, speedY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < pointNumber; i++) {
    points.push([random(width), random(height)]);
  }

  ox = width / 2;
  oy = height / 2;
  speedX = random()
  speedY = random()

  colorMode(HSB, 10, 100, 100, 100)

}

function draw() {
  // ボロノイセルの中心点をアニメーションさせるためのコード
  for (let i = 0; i < pointNumber; i++) {
    points[i][0] += map(noise(i * 0.1, frameCount * 0.01), 0, 1, -1, 1);
    points[i][1] += map(noise(i * 0.1 + 5000, frameCount * 0.01), 0, 1, -1, 1);
    if(points[i][0] > width) points[i][0] = 0
    if(points[i][0] < 0) points[i][0] = width
    if(points[i][1] > height) points[i][1] = 0
    if(points[i][1] < 0) points[i][1] = height
  }
  // アニメーションした点を元に、Delaunay 三角分割と Voronoi 図を再計算
  delaunay = d3.Delaunay.from(points);
  voronoi = delaunay.voronoi([0, 0, width, height]);

  ox += map(noise(frameCount*0.01*speedX), 0, 1, -20, 20);
  oy += map(noise(frameCount*0.01*speedY), 0, 1, -20, 20);

  if(ox > width) ox = 0
  if(ox < 0) ox = width
  if(oy > height) oy = 0
  if(oy < 0) oy = height

  for (let i = 0; i < pointNumber; i++) {
    let cell = voronoi.cellPolygon(i);
    let d = dist(points[i][0], points[i][1], ox, oy)
    let d2 = dist(points[i][0], points[i][1], oy, ox)
    let col = map(d, 0, sqrt(width * width, height * height), 0, 255);

    if (cell) {
      if(d > min(width, height)*0.4) d = 30
      fill(d2/d, d, d2, 100);
      
      if(d2 > min(width, height)*0.2) d2 = 0
      // fill(255, d2, 10);
      // noStroke()
      stroke(d/d2, d2, d, 100)
      beginShape();
      for (const [x, y] of cell) {
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}
