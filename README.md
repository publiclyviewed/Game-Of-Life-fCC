# Conway's Game of Life 🌱

A React-based implementation of Conway's Game of Life — a cellular automaton simulation featuring customizable patterns, speed controls, and a clean, interactive UI.

## 🚀 Features

- Interactive grid with click-to-toggle cells
- Start, stop, and clear controls
- Speed slider (slow to fast)
- Preset patterns: Glider, Pulsar, Toad, Beacon, LWSS, Glider Gun
- Responsive layout

## 🧠 How It Works

Each cell on the grid follows these rules per generation:
- **Survival**: A cell with 2 or 3 live neighbors survives.
- **Birth**: A dead cell with 3 live neighbors becomes alive.
- **Death**: All other cells die or remain dead.

## 🛠️ Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/publiclyviewed/Game-Of-Life-fCC.git
cd game-of-life
npm install
