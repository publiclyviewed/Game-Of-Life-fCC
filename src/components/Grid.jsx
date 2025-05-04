import React from "react";
import { numRows, numCols } from "../utils/helpers";

const Grid = ({ grid, toggleCell }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 20px)`,
        justifyContent: "center"
      }}
    >
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            onClick={() => toggleCell(i, j)}
            style={{
              width: 20,
              height: 20,
              backgroundColor: cell ? "#00FF00" : "#1a1a1a",
              border: "solid 1px #222"
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
