const points = [];
const pointNumber = 2000;
let voronoi;
let delaunay;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < pointNumber; i++) {
    points.push([random(width*0.4, width*0.6), random(height)]);
  }
}

function draw() {
  background(0)
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
    let red = map(points[i][0], 0, width, 0, 255)
    let green = map(noise(i, frameCount*0.005), 0, 1, 100, 255)
    let blue = map(points[i][1], 0, height, 0, 255)

    if (cell) {
      fill(red, green, blue);
      // noFill()
      stroke(0)
      beginShape();
      for (const [x, y] of cell) {
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}
