import React, {useEffect, useState} from 'react';
import arrowLeft from '../../images/ArrowLeft.svg'
import arrowRight from '../../images/ArrowRight.svg'
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

    let showLeft = !(!infinite && state.currentPosition === 0);
    let showRight = !(!infinite && state.currentPosition === state.length - 1);

    useEffect(() => setState(prev => ({...prev, length: children.length})), []);

    const onTouchStart = (e) => {
        startX = e.changedTouches[0].pageX;
    };

    const onTouchEnd = (e) => {
        endX = e.changedTouches[0].pageX;
        const distance = endX - startX;
        if (distance === 0) return null;

        const isMoveLeft = moveLeft(distance);


        if (((showLeft === false) && (isMoveLeft === false))
            || ((showRight === false) && (isMoveLeft === true))) return setState(prev => ({...prev}));


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


    return (
        <div className={'slider'}>
            <div className={'slide'}>

                {showLeft &&
                <div className={'additionalFirst'} onClick={leftSlide}>
                    {children[newPosition(false, state)]}
                </div>}

                <div className={'main'} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    {children[state.currentPosition]}
                </div>

                {showRight &&
                <div className={'additionalSecond'} onClick={rightSlide}>
                    {children[newPosition(true, state)]}
                </div>}

            </div>
            <div className={'controlPanel'}>
                {showLeft &&
                <img src={arrowLeft} alt="" className={'buttonLeft'} onClick={leftSlide}/>
                }
                <div className={'inputField'}>
                    <input className={'input'} type="number" name='position' placeholder={'Номер слайда'}
                           onChange={(e) => setInputPosition(e.target.value)}/>
                    <input type='button' className={'button'} onClick={setPosition} value={'Изменить'}/>
                </div>
                {showRight &&
                <img src={arrowRight} alt="" className={'buttonRight'} onClick={rightSlide}/>
                }

                <span style={{color: "red", display: "block"}}>{error ? error : <br/>}</span>
            </div>
        </div>
    )
});

export default Slider;