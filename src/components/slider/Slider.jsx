import React, {useEffect, useState} from 'react';
import './Slider.css'

const Slider = React.memo(({infinite = true, startPosition = 0, children}) => {

    let startX, endX;

    const initState = {
        currentPosition: startPosition,
        length: 0
    };

    const [state, setState] = useState(initState);
    const [error, setError] = useState('');
    const [inputPosition, setInputPosition] = useState(0);

    useEffect(() => setState(prev => ({...prev, length: children.length})), []);

    const onTouchStart = (e) => {
        startX = e.changedTouches[0].pageX;
    };

    const onTouchEnd = (e) => {
        endX = e.changedTouches[0].pageX;
        const distance = endX - startX;
        if (distance === 0) return null;

        const isMoveLeft = moveLeft(distance);

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
        if (0 > (inputPosition - 1)) return setError('отрицательное значение номера слайда ');
        else if ((inputPosition - 1) > state.length) return setError('номер слайда превышает количество слайдов');
        else setError('');
        return setState(prev => ({...prev, currentPosition: inputPosition - 1}))
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

    let hideLeft = !(!infinite && state.currentPosition === 0)
    let hideRight = !(!infinite && state.currentPosition === state.length - 1);

    return (
        <div className={'slider'}>
            <div className={'slide'}>

                {hideLeft &&
                <div className={'additionalFirst'} onClick={leftSlide}>
                    {children[newPosition(false, state)]}
                </div>}

                <div className={'main'} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    {children[state.currentPosition]}
                </div>

                {hideRight &&
                <div className={'additionalSecond'} onClick={rightSlide}>
                    {children[newPosition(true, state)]}
                </div>}

            </div>
            <div className={'controlPanel'}>
                {hideLeft &&
                < input type='button' className={'buttonLeft'} onClick={leftSlide} value={'<-'}/>}
                <div className={'inputField'}>
                    <input type="number" name='position' onChange={(e) => setInputPosition(e.target.value)}/>
                    <input type='button' onClick={setPosition} value={'set'}/>
                </div>
                {hideRight &&
                <input type='button' className={'buttonRight'} onClick={rightSlide} value={'->'}/>}

                <span style={{color: "red", display: "block"}}>{error ? error : <br/>}</span>
            </div>
        </div>
    )
});

export default Slider;