import React from 'react';
import './App.css';
import Slider from "./components/slider/Slider";
import Square from "./components/exampleElement/Square";
import SliderItem from "./components/slider/sliderItem/SliderItem";

const App = () => {

    const arr = [1, 2, 3, 4, 5, 6];
    const squares = arr.map(i => <SliderItem key={i}> <Square id={i}/> </SliderItem>);

    return (
        <div className="App">
            <div className="App-header">
                <Slider>
                    {squares}
                </Slider>
            </div>
        </div>
    );
};

export default App;
