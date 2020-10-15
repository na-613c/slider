import React from 'react';

const SliderItem = ({onTouchStart, onTouchEnd, children}) => {
    return (
        <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {children}
        </div>
    )
};

export default SliderItem;