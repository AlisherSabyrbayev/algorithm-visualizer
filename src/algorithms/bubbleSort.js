export const getBubbleSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;
    const auxiliaryArray = array.slice();
    bubbleSortHelper(auxiliaryArray, animations);
    return animations;
};

const bubbleSortHelper = (auxiliaryArray, animations) => {
    const n = auxiliaryArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animations.push({ type: 'COMPARE', payload: [j, j + 1, 'start'] });
            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                animations.push({ 
                    type: 'SWAP', 
                    payload: [j, j + 1, auxiliaryArray[j], auxiliaryArray[j + 1]] 
                });
                let temp = auxiliaryArray[j];
                auxiliaryArray[j] = auxiliaryArray[j + 1];
                auxiliaryArray[j + 1] = temp;
            }
            animations.push({ type: 'COMPARE', payload: [j, j + 1, 'end'] });
        }
    }
};
