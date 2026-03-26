# Algorithm Visualizer

A small ReactJs + ViteJs project for visualizing sorting

## Features

- generating a random array
- setting the arr size
- setting the animation speed (ms)
- Bubble / Merge / Quick / Insertion sort

## Run

npm install
npm run dev

## Build

npm run build
npm run preview

## Architecture

- `src/components/Visualizer.jsx` - the core logic of the visualizer
- `src/components/Controls.jsx` - buttons and sliders
- `src/sortingAlgorithms.js` - animation algorithms and steps
- `src/utils.js` - animations
