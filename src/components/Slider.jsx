import React, {useEffect, useState} from 'react';

const Slider = React.memo(({children}) => {

    let startX, endX;

    const initState = {
        currentPosition: 0,
        length: 0
    };

    const [state, setState] = useState(initState);
    useEffect(() => setState(prev => ({...prev, length: children.length})), []);

    const onTouchStart = (e) => {
        startX = e.changedTouches[0].pageX;
    };

    const onTouchEnd = (e) => {
        endX = e.changedTouches[0].pageX;
        const isMoveLeft = moveLeft(endX - startX);

        setState(prev => ({
            ...prev,
            currentPosition: newPosition(isMoveLeft, prev)
        }));
    };

    const moveLeft = (change) => change < 0;

    const newPosition = (isMoveLeft, state) => {
        let newPosition = state.currentPosition + (isMoveLeft ? 1 : -1);
        if (newPosition < 0) newPosition = state.length - 1;
        if (newPosition > state.length - 1) newPosition = 0;
        return newPosition
    };

    const leftSlide = () => {
        setState(prev => ({
            ...prev,
            currentPosition: newPosition(false, prev)
        }));
    };

    const rightSlide = () => {
        setState(prev => ({
            ...prev,
            currentPosition: newPosition(true, prev)
        }));
    };

    return (
        <div>
            <div onClick={leftSlide}>
                {children[newPosition(false, state)]}
            </div>
            <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                {children[state.currentPosition]}
            </div>
            <div onClick={rightSlide}>
                {children[newPosition(true, state)]}
            </div>
            <div onClick={leftSlide}> {'<-'} </div>
            <div onClick={rightSlide}> -></div>
        </div>

    )
});

export default Slider;