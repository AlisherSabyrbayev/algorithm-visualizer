export const getBubbleSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;
    const auxiliaryArray = array.slice();
    const n = auxiliaryArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animations.push({ type: 'COMPARE', payload: [j, j + 1, 'start'] });
            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                animations.push({ type: 'SWAP', payload: [j, j + 1, auxiliaryArray[j], auxiliaryArray[j + 1]] });
                let temp = auxiliaryArray[j];
                auxiliaryArray[j] = auxiliaryArray[j + 1];
                auxiliaryArray[j + 1] = temp;
            }
            animations.push({ type: 'COMPARE', payload: [j, j + 1, 'end'] });
        }
    }
    return animations;
};

export const getMergeSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array.slice(), 0, array.length - 1, auxiliaryArray, animations);
    return animations;
};

const mergeSortHelper = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
};

const doMerge = (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push({ type: 'COMPARE', payload: [i, j, 'start'] });
        animations.push({ type: 'COMPARE', payload: [i, j, 'end'] });
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push({ type: 'OVERWRITE', payload: [k, auxiliaryArray[i]] });
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push({ type: 'OVERWRITE', payload: [k, auxiliaryArray[j]] });
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push({ type: 'COMPARE', payload: [i, i, 'start'] });
        animations.push({ type: 'COMPARE', payload: [i, i, 'end'] });
        animations.push({ type: 'OVERWRITE', payload: [k, auxiliaryArray[i]] });
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push({ type: 'COMPARE', payload: [j, j, 'start'] });
        animations.push({ type: 'COMPARE', payload: [j, j, 'end'] });
        animations.push({ type: 'OVERWRITE', payload: [k, auxiliaryArray[j]] });
        mainArray[k++] = auxiliaryArray[j++];
    }
};

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
            animations.push({ type: 'SWAP', payload: [i, j, auxiliaryArray[i], auxiliaryArray[j]] });
            let temp = auxiliaryArray[i];
            auxiliaryArray[i] = auxiliaryArray[j];
            auxiliaryArray[j] = temp;
        }
    }
    animations.push({ type: 'SWAP', payload: [i + 1, endIdx, auxiliaryArray[i + 1], auxiliaryArray[endIdx]] });
    let temp = auxiliaryArray[i + 1];
    auxiliaryArray[i + 1] = auxiliaryArray[endIdx];
    auxiliaryArray[endIdx] = temp;
    return i + 1;
};

export const getInsertionSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;
    const auxiliaryArray = array.slice();
    
    for (let i = 1; i < auxiliaryArray.length; i++) {
        let key = auxiliaryArray[i];
        let j = i - 1;
        animations.push({ type: 'COMPARE', payload: [i, j, 'start'] });
        animations.push({ type: 'COMPARE', payload: [i, j, 'end'] });
        
        while (j >= 0 && auxiliaryArray[j] > key) {
            animations.push({ type: 'COMPARE', payload: [j, j + 1, 'start'] });
            animations.push({ type: 'OVERWRITE', payload: [j + 1, auxiliaryArray[j]] });
            animations.push({ type: 'COMPARE', payload: [j, j + 1, 'end'] });
            auxiliaryArray[j + 1] = auxiliaryArray[j];
            j = j - 1;
        }
        animations.push({ type: 'OVERWRITE', payload: [j + 1, key] });
        auxiliaryArray[j + 1] = key;
    }
    return animations;
};
