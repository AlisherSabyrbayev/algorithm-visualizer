export const getAnimationTimeouts = () => {
    return window.animationTimeouts || [];
};

export const clearAllTimeouts = () => {
    const timeouts = getAnimationTimeouts();
    for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    window.animationTimeouts = [];
};

export const executeAnimations = (animations, speedMs, onFinish) => {
    clearAllTimeouts();
    const arrayBars = document.getElementsByClassName('array-bar');
    window.animationTimeouts = [];
    
    for (let i = 0; i < animations.length; i++) {
        const { type, payload } = animations[i];
        
        const timeout = setTimeout(() => {
            if (type === 'COMPARE') {
                const [idx1, idx2, phase] = payload;
                const color = phase === 'start' ? 'var(--bar-comparing)' : 'var(--bar-default)';
                if (arrayBars[idx1]) arrayBars[idx1].style.backgroundColor = color;
                if (arrayBars[idx2]) arrayBars[idx2].style.backgroundColor = color;
            } else if (type === 'OVERWRITE') {
                const [idx, newHeight] = payload;
                if (arrayBars[idx]) {
                    arrayBars[idx].style.height = `${newHeight}px`;
                    arrayBars[idx].style.backgroundColor = 'var(--bar-swapping)';
                    setTimeout(() => {
                        if (arrayBars[idx]) arrayBars[idx].style.backgroundColor = 'var(--bar-default)';
                    }, speedMs);
                }
            } else if (type === 'SWAP') {
                const [idx1, idx2, h1, h2] = payload;
                if (arrayBars[idx1] && arrayBars[idx2]) {
                    arrayBars[idx1].style.height = `${h2}px`;
                    arrayBars[idx2].style.height = `${h1}px`;
                    arrayBars[idx1].style.backgroundColor = 'var(--bar-swapping)';
                    arrayBars[idx2].style.backgroundColor = 'var(--bar-swapping)';
                    setTimeout(() => {
                       if (arrayBars[idx1]) arrayBars[idx1].style.backgroundColor = 'var(--bar-default)';
                       if (arrayBars[idx2]) arrayBars[idx2].style.backgroundColor = 'var(--bar-default)';
                    }, speedMs);
                }
            }

            if (i === animations.length - 1) {
                // Final sorted animation cascade
                setTimeout(() => {
                    for(let j=0; j<arrayBars.length; j++){
                        const t = setTimeout(() => {
                            if (arrayBars[j]) arrayBars[j].style.backgroundColor = 'var(--bar-sorted)';
                        }, j * 10);
                        window.animationTimeouts.push(t);
                    }
                    setTimeout(() => onFinish(), arrayBars.length * 10);
                }, speedMs);
            }
        }, i * speedMs);
        
        window.animationTimeouts.push(timeout);
    }
    
    if (animations.length === 0) {
        onFinish();
    }
};
