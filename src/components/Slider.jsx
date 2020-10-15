import React from 'react';

const SlideElement = ({onTouchStart, onTouchEnd, component}) => {


    return (
        <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {component}
        </div>
    )
};

export default SlideElement;