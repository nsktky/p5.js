const points = [];
const pointNumber = 200;
let voronoi;
let delaunay;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < pointNumber; i++) {
    points.push([random(width), random(height)]);
  }

  delaunay = d3.Delaunay.from(points);
  voronoi = delaunay.voronoi([0, 0, width, height]);
}

function draw() {
  for (let i = 0; i < pointNumber; i++) {
    const cell = voronoi.cellPolygon(i);
    let col = map(noise(i, frameCount*0.005), 0, 1, 0, 255)

    if (cell) {
      fill(col, 150, 50);
      stroke(180);
      strokeWeight(2);
      beginShape();
      for (const [x, y] of cell) {
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}
