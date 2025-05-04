import React from "react";


import "../App.css";

const Grid = ({ grid, toggleCell }) => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${grid[0].length}, 20px)`,
      }}
    >
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            className={`cell ${cell ? "alive" : ""}`}
            onClick={() => toggleCell(i, j)}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
