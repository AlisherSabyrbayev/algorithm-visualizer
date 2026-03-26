import React from 'react';
import './Controls.css';

const Controls = ({ 
  generateNewArray, 
  isSorting, 
  arraySize, 
  setArraySize,
  sortingSpeed,
  setSortingSpeed,
  bubbleSort,
  mergeSort,
  quickSort,
  insertionSort
}) => {
  return (
    <div className="controls-panel">
      <div className="controls-group">
        <button 
          type="button"
          className="btn primary" 
          onClick={generateNewArray} 
          aria-label="Generate a new random array"
          disabled={isSorting}
        >
          Generate New Array
        </button>
      </div>

      <div className="controls-group sliders">
        <div className="slider-container">
          <label htmlFor="array-size-range">Array Size: {arraySize}</label>
          <input 
            id="array-size-range"
            type="range" 
            min="10" 
            max="150" 
            value={arraySize} 
            onChange={(e) => setArraySize(Number(e.target.value))}
            aria-label="Array size"
            disabled={isSorting}
          />
        </div>
        <div className="slider-container">
          <label htmlFor="speed-range">Speed (ms delay): {sortingSpeed}</label>
          <input 
            id="speed-range"
            type="range" 
            min="1" 
            max="100" 
            value={sortingSpeed} 
            onChange={(e) => setSortingSpeed(Number(e.target.value))}
            aria-label="Animation speed in milliseconds"
            disabled={isSorting}
          />
        </div>
      </div>

      <div className="controls-group algorithms">
        <button type="button" className="btn" disabled={isSorting} onClick={bubbleSort}>Bubble Sort</button>
        <button type="button" className="btn" disabled={isSorting} onClick={mergeSort}>Merge Sort</button>
        <button type="button" className="btn" disabled={isSorting} onClick={quickSort}>Quick Sort</button>
        <button type="button" className="btn" disabled={isSorting} onClick={insertionSort}>Insertion Sort</button>
      </div>
    </div>
  );
};

export default Controls;
