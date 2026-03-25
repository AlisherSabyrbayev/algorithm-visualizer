import React, { useState, useEffect } from 'react';
import './Visualizer.css';
import Controls from './Controls';
import { executeAnimations, clearAllTimeouts } from '../utils';
import { 
  getBubbleSortAnimations, 
  getMergeSortAnimations, 
  getQuickSortAnimations, 
  getInsertionSortAnimations 
} from '../sortingAlgorithms';

const Visualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [arraySize, setArraySize] = useState(50);
  const [sortingSpeed, setSortingSpeed] = useState(10);

  useEffect(() => {
    generateNewArray();
  }, [arraySize]);

  const generateNewArray = () => {
    if (isSorting) {
      clearAllTimeouts();
      setIsSorting(false);
    }
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 496) + 5);
    }
    setArray(newArray);
    
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < arrayBars.length; i++) {
        const bar = arrayBars[i];
        if (bar) bar.style.backgroundColor = 'var(--bar-default)';
    }
  };

  const handleSort = (sortFunction) => {
    setIsSorting(true);
    const animations = sortFunction(array);
    executeAnimations(animations, sortingSpeed, () => {
        setIsSorting(false);
    });
  };

  const bubbleSort = () => handleSort(getBubbleSortAnimations);
  const mergeSort = () => handleSort(getMergeSortAnimations);
  const quickSort = () => handleSort(getQuickSortAnimations);
  const insertionSort = () => handleSort(getInsertionSortAnimations);

  return (
    <div className="visualizer-container">
      <Controls 
        generateNewArray={generateNewArray}
        isSorting={isSorting}
        arraySize={arraySize}
        setArraySize={setArraySize}
        sortingSpeed={sortingSpeed}
        setSortingSpeed={setSortingSpeed}
        bubbleSort={bubbleSort}
        mergeSort={mergeSort}
        quickSort={quickSort}
        insertionSort={insertionSort}
      />
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
              width: `${Math.max(2, Math.floor(800 / arraySize))}px`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
