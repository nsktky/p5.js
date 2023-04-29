const points = [];
const pointNumber = 5000;
let voronoi;
let delaunay;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < pointNumber; i++) {
    points.push([random(width), random(height)]);
  }
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

  for (let i = 0; i < pointNumber; i++) {
    let cell = voronoi.cellPolygon(i);
    let d = dist(points[i][0], points[i][1], width / 2, height / 2)

    if (cell) {
      fill(d*0.4);
      noStroke()
      beginShape();
      for (const [x, y] of cell) {
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}
