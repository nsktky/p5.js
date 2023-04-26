const points = [];
const pointNumber = 500;
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
  }
  // アニメーションした点を元に、Delaunay 三角分割と Voronoi 図を再計算
  delaunay = d3.Delaunay.from(points);
  voronoi = delaunay.voronoi([0, 0, width, height]);

  for (let i = 0; i < pointNumber; i++) {
    let cell = voronoi.cellPolygon(i);
    let col = map(noise(i, frameCount*0.005), 0, 1, 0, 255)

    if (cell) {
      fill(col);
      noStroke();
      beginShape();
      for (const [x, y] of cell) {
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}
