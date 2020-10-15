import React from 'react';
import './App.css';
import Slider from "./components/Slider";
import Square from "./components/Square";
import SliderItem from "./components/SliderItem";

const App = () => {

    return (
        <div className="App">
            <div className="App-header">
                <Slider>
                    <SliderItem>
                        <Square id={1}/>
                    </SliderItem>
                    <SliderItem>
                        <Square id={2}/>
                    </SliderItem>
                    <SliderItem>
                        <Square id={3}/>
                    </SliderItem>
                </Slider>
            </div>
        </div>
    );
};

export default App;
