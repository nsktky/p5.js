// グリッドのサイズ
let gridSize;
// セルのサイズ
const cellSize = 10;

// グリッドデータ
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridSize = 200
  grid = createGrid(gridSize);
  noStroke();
  randomizeGrid(grid);
}

function draw() {
  background(0);
  displayGrid(grid);
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

function displayGrid(grid) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] == 1) {
        fill(255);
      } else {
        fill(0);
      }
      ellipse(i * cellSize, j * cellSize, cellSize - 1, cellSize*3);
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