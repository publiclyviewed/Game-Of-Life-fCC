import { useState, useRef, useCallback } from "react";
import Grid from "./components/Grid";
import {
  generateRandomGrid,
  generateEmptyGrid,
  numRows,
  numCols
} from "./utils/helpers";
import "./App.css";


function App() {
  const [grid, setGrid] = useState(generateRandomGrid());
  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const runningRef = useRef(running);
  runningRef.current = running;

  const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [1, 1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [-1, 1]
  ];

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid((g) => {
      return g.map((row, i) =>
        row.map((cell, j) => {
          let neighbors = 0;
          operations.forEach(([x, y]) => {
            const newI = i + x;
            const newJ = j + y;
            if (
              newI >= 0 &&
              newI < numRows &&
              newJ >= 0 &&
              newJ < numCols
            ) {
              neighbors += g[newI][newJ];
            }
          });

          if (cell === 1 && (neighbors < 2 || neighbors > 3)) return 0;
          if (cell === 0 && neighbors === 3) return 1;
          return cell;
        })
      );
    });

    setGeneration((gen) => gen + 1);

    setTimeout(runSimulation, 100);
  }, []);

  const toggleCell = (row, col) => {
    const newGrid = grid.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? (cell ? 0 : 1) : cell))
    );
    setGrid(newGrid);
  };

  return (
    <div style={{ textAlign: "center", color: "white", paddingTop: "2rem" }}>
      <h1>Game of Life</h1>
      <p>Generation: {generation}</p>
      <Grid grid={grid} toggleCell={toggleCell} />
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => {
            setGrid(generateEmptyGrid());
            setGeneration(0);
          }}
          style={{ marginLeft: "1rem" }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            setGrid(generateRandomGrid());
            setGeneration(0);
          }}
          style={{ marginLeft: "1rem" }}
        >
          Random
        </button>
      </div>
    </div>
  );
}

export default App;
