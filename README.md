# Algorithm Visualizer

Interactive sorting algorithm visualizer built with React and Vite.

## Features

- Random array generation with configurable size
- Adjustable animation speed
- Step-by-step visual animations for sorting operations
- Color states for compare, swap, and sorted results

## Implemented Algorithms

- Bubble Sort
- Merge Sort
- Quick Sort
- Insertion Sort

## Stack

- React 19
- Vite 8
- Plain CSS

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
npm run preview
```

## Controls

- `Generate New Array`: creates a fresh random dataset
- `Array Size`: changes the number of bars
- `Speed (ms delay)`: changes the delay between animation steps

## Project Structure

```text
src/
  components/
    Controls.jsx
    Visualizer.jsx
  sortingAlgorithms.js
  utils.js
```
