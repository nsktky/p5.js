const cellSize = 10;
const mazeWidth = 80;
const mazeHeight = 80;
let solution;

let maze;

function setup() {
  createCanvas(mazeWidth * cellSize, mazeHeight * cellSize);
  maze = generateMaze(mazeWidth, mazeHeight);
  solution = solveMaze(maze);
  colorMode(HSB, 2000, 300, 100, 100)
}

function draw() {
  // background(0)
  translate(width/2, 0);
  rotate(frameCount*1000)
  displayMaze(maze);
  animateSolution(solution);
}

function generateMaze(width, height) {
  const maze = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => ({
      visited: false,
      walls: [true, true, true, true], // [Top, Right, Bottom, Left]
    }))
  );

  const stack = [];
  const start = { x: 0, y: 0 };
  const end = { x: width - 1, y: height - 1 };
  const randomBias = 2; // 偽の道が多く生成される確率を調整

  maze[start.y][start.x].visited = true;
  stack.push(start);

  while (stack.length > 0) {
    const current = stack[stack.length - 1];
    const neighbors = getValidNeighbors(current, maze);

    if (neighbors.length === 0) {
      stack.pop();
    } else {
      const randomIndex = biasedRandomIndex(neighbors.length, randomBias);
      const chosen = neighbors[randomIndex];

      removeWall(current, chosen, maze);
      maze[chosen.y][chosen.x].visited = true;
      stack.push(chosen);
    }
  }

  maze[start.y][start.x].color = "blue";
  maze[end.y][end.x].color = "red";

  return maze;
}

function biasedRandomIndex(length, bias) {
  const randomValue = pow(random(), bias);
  return floor(randomValue * length);
}

function getValidNeighbors(cell, maze) {
  const { x, y } = cell;
  const neighbors = [];

  const directions = [
    { x: 0, y: -1, wallIndex: 0 },
    { x: 1, y: 0, wallIndex: 1 },
    { x: 0, y: 1, wallIndex: 2 },
    { x: -1, y: 0, wallIndex: 3 },
  ];

  for (const direction of directions) {
    const newX = x + direction.x;
    const newY = y + direction.y;

    if (
      newX >= 0 &&
      newY >= 0 &&
      newX < maze[0].length &&
      newY < maze.length &&
      !maze[newY][newX].visited
    ) {
      neighbors.push({ ...direction, x: newX, y: newY });
    }
  }

  return neighbors;
}

function removeWall(cell1, cell2, maze) {
  const xDiff = cell2.x - cell1.x;
  const yDiff = cell2.y - cell1.y;

  if (xDiff === 1) {
    maze[cell1.y][cell1.x].walls[1] = false;
    maze[cell2.y][cell2.x].walls[3] = false;
  } else if (xDiff === -1) {
    maze[cell1.y][cell1.x].walls[3] = false;
    maze[cell2.y][cell2.x].walls[1] = false;
  } else if (yDiff === 1) {
    maze[cell1.y][cell1.x].walls[2] = false;
    maze[cell2.y][cell2.x].walls[0] = false;
  } else if (yDiff === -1) {
    maze[cell1.y][cell1.x].walls[0] = false;
    maze[cell2.y][cell2.x].walls[2] = false;
  }
}

function displayMaze(maze) {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      const cell = maze[y][x];
      const xPos = x * cellSize;
      const yPos = y * cellSize;

      stroke(xPos, yPos, 100);
      strokeWeight(0.1);

      if (cell.walls[0]) {
        line(xPos, yPos, xPos + cellSize, yPos);
      }
      if (cell.walls[1]) {
        line(xPos + cellSize, yPos, xPos + cellSize, yPos + cellSize);
      }
      if (cell.walls[2]) {
        line(xPos, yPos + cellSize, xPos + cellSize, yPos + cellSize);
      }
      if (cell.walls[3]) {
        line(xPos, yPos, xPos, yPos + cellSize);
      }
    }
  }
}

function solveMaze(maze) {
  const start = { x: 0, y: 0 };
  const end = { x: maze[0].length - 1, y: maze.length - 1 };
  const stack = [start];
  const visited = Array.from({ length: maze.length }, () => Array(maze[0].length).fill(false));
  visited[start.y][start.x] = true;

  while (stack.length > 0) {
    const current = stack[stack.length - 1];
    const neighbors = getUnvisitedNeighbors(current, maze, visited);

    if (current.x === end.x && current.y === end.y) {
      return stack;
    }

    if (neighbors.length === 0) {
      stack.pop();
    } else {
      const randomIndex = floor(random(neighbors.length));
      const chosen = neighbors[randomIndex];
      visited[chosen.y][chosen.x] = true;
      stack.push(chosen);
    }
  }

  return [];
}

function getUnvisitedNeighbors(cell, maze, visited) {
  const { x, y } = cell;
  const neighbors = [];

  const directions = [
    { x: 0, y: -1, wallIndex: 0 },
    { x: 1, y: 0, wallIndex: 1 },
    { x: 0, y: 1, wallIndex: 2 },
    { x: -1, y: 0, wallIndex: 3 },
  ];

  for (const direction of directions) {
    const newX = x + direction.x;
    const newY = y + direction.y;

    if (
      newX >= 0 &&
      newY >= 0 &&
      newX < maze[0].length &&
      newY < maze.length &&
      !visited[newY][newX] &&
      !maze[y][x].walls[direction.wallIndex]
    ) {
      neighbors.push({ x: newX, y: newY });
    }
  }

  return neighbors;
}

let solutionIndex = 0;
let animationSpeed = 10;

function animateSolution(solution, x, y) {
  for (let i = 1; i < solutionIndex; i++) {
    const cell = solution[i];
    const xPos = cell.x * cellSize;
    const yPos = cell.y * cellSize;
    let col = map(noise(xPos, yPos, frameCount*0.01), 0, 1, 0, 360)
    noStroke()
    fill(yPos, col, xPos);
    rect(xPos, yPos, cellSize*0.8, cellSize*0.5);
  }

  if (solutionIndex < solution.length-1) {
    if (frameCount % animationSpeed === 0) {
      solutionIndex++;
    }
  }
}