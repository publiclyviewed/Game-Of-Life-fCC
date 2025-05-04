import React, { useState, useEffect, useRef, useCallback } from "react";
import Grid from "./components/Grid";
import {
  generateRandomGrid,
  generateEmptyGrid,
  numRows,
  numCols,
} from "./utils/helpers";
import {
  gliderPattern,
  blinkerPattern,
  toadPattern,
  beaconPattern,
  pulsarPattern,
  lwssPattern,
  miniGosperGliderGun,
  addPatternToGrid
} from "./utils/patterns";

import "./App.css";

function App() {
  const [grid, setGrid] = useState(generateRandomGrid());
  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState(1000); // Default speed control
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
    [-1, 1],
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
            if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
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

    setTimeout(runSimulation, speed);
  }, [speed]);

  useEffect(() => {
    setRunning(true); // <-- Start automatically
  }, []);
  
  useEffect(() => {
    if (running) {
      runningRef.current = true;
      runSimulation();
    }
  }, [running, runSimulation]);
  

  const toggleCell = (row, col) => {
    const newGrid = grid.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? (cell ? 0 : 1) : cell))
    );
    setGrid(newGrid);
  };

  const applyPattern = (pattern) => {
    const newGrid = addPatternToGrid(pattern, grid, 5, 5); // Apply the pattern at the top-left
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
        <div style={{ marginTop: "1rem" }}>
          <label>Speed Control</label>
          <input
            type="range"
            min="100"
            max="2000"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span>{speed} ms</span>
        </div>
        <details style={{ marginTop: "1rem" }}>
  <summary style={{ cursor: "pointer", fontWeight: "bold" }}>Insert Pattern</summary>
  <div style={{ marginTop: "0.5rem" }}>
    <button onClick={() => applyPattern(gliderPattern)}>Glider</button>
    <button onClick={() => applyPattern(blinkerPattern)}>Blinker</button>
    <button onClick={() => applyPattern(toadPattern)}>Toad</button>
    <button onClick={() => applyPattern(beaconPattern)}>Beacon</button>
    <button onClick={() => applyPattern(pulsarPattern)}>Pulsar</button>
    <button onClick={() => applyPattern(lwssPattern)}>LWSS</button>
    <button onClick={() => applyPattern(miniGosperGliderGun)} style={{ marginLeft: "1rem" }}>
    Glider Gun
    </button>

  </div>
</details>

      </div>
    </div>
  );
}

export default App;
