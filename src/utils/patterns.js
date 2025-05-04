// utils/patterns.js

export const gliderPattern = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
  ];
  
  export const blinkerPattern = [
    [1, 1, 1],
  ];

  export const toadPattern = [
    [0, 1, 1, 1],
    [1, 1, 1, 0],
  ];
  
  export const beaconPattern = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
  ];

  export const pulsarPattern = [
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
  ];

  export const lwssPattern = [
    [0,1,1,1,1],
    [1,0,0,0,1],
    [0,0,0,0,1],
    [1,0,0,1,0],
  ];
  
  export const miniGosperGliderGun = [
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0],
    [0,0,1,1,0,1,1,1,0,0,0],
    [0,1,1,1,0,1,1,1,1,0,0],
    [0,0,1,1,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
  ];
  
  
  
  export const createEmptyGrid = () => {
    // Create an empty grid of a given size (e.g., 30x30)
    const rows = 30;
    const cols = 30;
    return Array(rows).fill().map(() => Array(cols).fill(0));
  };
  
  // Function to add a pattern to a grid
  export const addPatternToGrid = (pattern, grid, startRow, startCol) => {
    const newGrid = grid.map(row => row.slice());
    pattern.forEach((row, i) =>
      row.forEach((cell, j) => {
        if (cell === 1) {
          newGrid[startRow + i][startCol + j] = 1;
        }
      })
    );
    return newGrid;
  };
  