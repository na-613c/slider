import React, {useEffect, useState} from 'react';

const Slider = React.memo(({children}) => {

    let startX, endX;

    const initState = {
        currentPosition: 0,
        length: 0
    };

    const [state, setState] = useState(initState);

    useEffect(() => setState(prev => ({...prev, length: children.length})), []);


    let onTouchStart = (e) => {
        startX = e.changedTouches[0].pageX;
    };

    let onTouchEnd = (e) => {
        endX = e.changedTouches[0].pageX;
        const isMoveLeft = moveLeft(endX - startX);

        setState(prev => ({
            ...prev,
            currentPosition: movePosition(isMoveLeft, prev)
        }));
    };

    const moveLeft = (change) => {
        return change < 0;
    };

    const movePosition = (isMoveLeft, state) => {
        let newPosition = state.currentPosition + (isMoveLeft ? 1 : -1);
        if (newPosition < 0) newPosition = state.length - 1;
        if (newPosition > state.length - 1) newPosition = 0;
        return newPosition
    };

    console.log(state);

    return (
        <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {children[state.currentPosition]}
        </div>
    )
})

export default Slider;