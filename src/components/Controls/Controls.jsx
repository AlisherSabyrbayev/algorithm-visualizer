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
          className="btn primary" 
          onClick={generateNewArray} 
          disabled={isSorting}
        >
          Generate New Array
        </button>
      </div>

      <div className="controls-group sliders">
        <div className="slider-container">
          <label>Array Size: {arraySize}</label>
          <input 
            type="range" 
            min="10" 
            max="150" 
            value={arraySize} 
            onChange={(e) => setArraySize(Number(e.target.value))}
            disabled={isSorting}
          />
        </div>
        <div className="slider-container">
          <label>Speed (ms delay): {sortingSpeed}</label>
          <input 
            type="range" 
            min="1" 
            max="100" 
            value={sortingSpeed} 
            onChange={(e) => setSortingSpeed(Number(e.target.value))}
            disabled={isSorting}
            title="Smaller value means faster sorting"
          />
        </div>
      </div>

      <div className="controls-group algorithms">
        <button className="btn" disabled={isSorting} onClick={bubbleSort}>Bubble Sort</button>
        <button className="btn" disabled={isSorting} onClick={mergeSort}>Merge Sort</button>
        <button className="btn" disabled={isSorting} onClick={quickSort}>Quick Sort</button>
        <button className="btn" disabled={isSorting} onClick={insertionSort}>Insertion Sort</button>
      </div>
    </div>
  );
};

export default Controls;
