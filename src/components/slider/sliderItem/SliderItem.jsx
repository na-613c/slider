import React from 'react';
import s from './SliderItem.module.css'

const SliderItem = ({onTouchStart, onTouchEnd, children}) => {
    return (
        <div className={s.slideItem} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {children}
        </div>
    )
};

export default SliderItem;