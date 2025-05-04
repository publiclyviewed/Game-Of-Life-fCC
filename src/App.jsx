import { useState } from "react";
import Grid from "./components/Grid";
import { generateRandomGrid, generateEmptyGrid } from "./utils/helpers";

function App() {
  const [grid, setGrid] = useState(generateRandomGrid());

  const toggleCell = (row, col) => {
    const newGrid = grid.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? (cell ? 0 : 1) : cell))
    );
    setGrid(newGrid);
  };

  return (
    <div style={{ textAlign: "center", color: "white", paddingTop: "2rem" }}>
      <h1>Game of Life</h1>
      <Grid grid={grid} toggleCell={toggleCell} />
    </div>
  );
}

export default App;
