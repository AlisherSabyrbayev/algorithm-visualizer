export const getQuickSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;
    const auxiliaryArray = array.slice();
    quickSortHelper(auxiliaryArray, 0, array.length - 1, animations);
    return animations;
};

const quickSortHelper = (auxiliaryArray, startIdx, endIdx, animations) => {
    if (startIdx < endIdx) {
        const pivotIndex = partition(auxiliaryArray, startIdx, endIdx, animations);
        quickSortHelper(auxiliaryArray, startIdx, pivotIndex - 1, animations);
        quickSortHelper(auxiliaryArray, pivotIndex + 1, endIdx, animations);
    }
};

const partition = (auxiliaryArray, startIdx, endIdx, animations) => {
    const pivot = auxiliaryArray[endIdx];
    let i = startIdx - 1;
    for (let j = startIdx; j < endIdx; j++) {
        animations.push({ type: 'COMPARE', payload: [j, endIdx, 'start'] });
        animations.push({ type: 'COMPARE', payload: [j, endIdx, 'end'] });
        if (auxiliaryArray[j] < pivot) {
            i++;
            animations.push({ 
                type: 'SWAP', 
                payload: [i, j, auxiliaryArray[i], auxiliaryArray[j]] 
            });
            let temp = auxiliaryArray[i];
            auxiliaryArray[i] = auxiliaryArray[j];
            auxiliaryArray[j] = temp;
        }
    }
    animations.push({ 
        type: 'SWAP', 
        payload: [i + 1, endIdx, auxiliaryArray[i + 1], auxiliaryArray[endIdx]] 
    });
    let temp = auxiliaryArray[i + 1];
    auxiliaryArray[i + 1] = auxiliaryArray[endIdx];
    auxiliaryArray[endIdx] = temp;
    return i + 1;
};
