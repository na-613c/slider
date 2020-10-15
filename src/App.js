import React from 'react';
import './App.css';
import SlideElement from "./components/Slider";
import Square from "./components/Square";

const App = () => {
    let startX, endX;

    let onTouchStart = (e) => {
        startX = e.changedTouches[0].pageX;
    };

    let onTouchEnd = (e) => {
        endX = e.changedTouches[0].pageX;
        console.log(moveRight(endX - startX)?'right':'left')
    };

    const moveRight = (change) => {
        return change > 0;
    };


    return (
        <div className="App">
            <header className="App-header">
                <SlideElement
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    component={<Square/>}
                />
            </header>
        </div>
    );
};

export default App;
