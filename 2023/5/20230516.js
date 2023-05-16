const points = [];
const pointNumber = 50;
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

  colorMode(HSB, random(10), 100, 100, 100)

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

  ox += map(noise(frameCount*0.01*speedX), 0, 1, -1, 1);
  oy += map(noise(frameCount*0.01*speedY), 0, 1, -1, 1);

  if(ox > width) ox = 0
  if(ox < 0) ox = width
  if(oy > height) oy = 0
  if(oy < 0) oy = height

  for (let i = 0; i < pointNumber; i++) {
    let cell = voronoi.cellPolygon(i);
    let d = dist(points[i][0], points[i][1], ox, oy)
    let d2 = dist(points[i][0], points[i][1], width/2, height/2)

    if (cell) {
      if(d > min(width, height)*0.4) d = 0
      fill(d/d2, d, d2, 1);
      if(d2 > min(width, height)*0.25) d2 = 10
      stroke(d2/d, d2, d, 1);

      beginShape();
      for (const [x, y] of cell) {
        vertex(x, y);
        vertex(y, x);

      }
      endShape(CLOSE);
    }
  }
}
