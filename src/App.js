import React, {Fragment, useState} from 'react';
import './App.css';
import Slider from "./components/slider/Slider";
import Square from "./components/exampleElement/Square";
import SliderItem from "./components/slider/sliderItem/SliderItem";

const App = () => {

    const [value, setValue] = useState(true);


    const arr = [1, 2, 3, 4, 5, 6];
    const squares = arr.map(i => <SliderItem key={i}> <Square id={i}/> </SliderItem>);

    return (
        <Fragment>
            <div style={{margin: '20px 0  0 20px'}}>
                <input type="checkbox" checked={value} onChange={() => setValue(!value)}/> Бесконечно
            </div>
            <div style={{marginTop: 10}}>
                <Slider infinite={value}>
                    {squares}
                </Slider>
            </div>
        </Fragment>


    );
};

export default App;
