import React, {useEffect, useState} from 'react';

const Slider = React.memo(({infinite = true, startPosition = 0, children}) => {

    let startX, endX;

    const initState = {
        currentPosition: startPosition,
        length: 0
    };

    const [state, setState] = useState(initState);
    const [inputPosition, setInputPosition] = useState(0);

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

        if (infinite) {
            if (newPosition < 0) newPosition = state.length - 1;
            if (newPosition > state.length - 1) newPosition = 0;
        }

        return newPosition
    };

    const setPosition = () => {
        return setState(prev => ({...prev, currentPosition: +inputPosition}))
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
            <input type="number" name='position' onChange={(e) => setInputPosition(e.target.value)}/>
            <input type='button' onClick={setPosition}/>
        </div>
    )
});

export default Slider;