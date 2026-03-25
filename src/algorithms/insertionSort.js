export const getInsertionSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;
    const auxiliaryArray = array.slice();
    insertionSortHelper(auxiliaryArray, animations);
    return animations;
};

const insertionSortHelper = (auxiliaryArray, animations) => {
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
};
