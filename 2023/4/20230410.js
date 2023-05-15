// グリッドのサイズ
let gridSize;
// セルのサイズ
const cellSize = 10;

// グリッドデータ
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  gridSize = 100
  grid = createGrid(gridSize);
  noStroke();
  randomizeGrid(grid);
  colorMode(HSB, 30, 100, 100, 100);
}

function draw() {
  displayGrid(grid, frameCount);
  updateGrid(grid);
}

function createGrid(gridSize) {
  let grid = new Array(gridSize);
  for (let i = 0; i < gridSize; i++) {
    grid[i] = new Array(gridSize);
  }
  return grid;
}

function randomizeGrid(grid) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function displayGrid(grid, t) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let h = map(noise(i, j, t*0.01), 0, 1, 0, 360)
      let s = map(noise(i, j, t/j), 0, 1, 0, 100)
      let b = map(noise(i, j, t/i), 0, 1, 0, 100)
      if (grid[i][j] == 1) {
        fill(h, s*1.3, b, 100);
        rect(i * cellSize, j * cellSize, t*0.1);
      } else {
        fill(h, s, 30, 10);
        ellipse(i * cellSize, j * cellSize, t*0.1);
      }
    }
  }
}

function updateGrid(grid) {
  let newGrid = createGrid(gridSize);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let neighbors = countNeighbors(grid, i, j);

      if (grid[i][j] == 1 && (neighbors < 2 || neighbors > 3)) {
        newGrid[i][j] = 0;
      } else if (grid[i][j] == 0 && neighbors == 3) {
        newGrid[i][j] = 1;
      } else {
        newGrid[i][j] = grid[i][j];
      }
    }
  }

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid[i][j] = newGrid[i][j];
    }
  }
}

function countNeighbors(grid, x, y) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i == 0 && j == 0) {
        continue;
      }

      let newX = (x + i + gridSize) % gridSize;
      let newY = (y + j + gridSize) % gridSize;

      count += grid[newX][newY];
    }
  }
  return count;
}