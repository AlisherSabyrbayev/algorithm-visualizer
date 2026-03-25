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
