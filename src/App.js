import React, {useState} from 'react';
import './App.css';
import Slider from "./components/slider/Slider";
import Square from "./components/exampleElement/Square";
import SliderItem from "./components/slider/sliderItem/SliderItem";

const App = () => {

    const [value, setValue] = useState(true);


    const arr = [1, 2, 3, 4, 5, 6];
    const squares = arr.map(i => <SliderItem key={i}> <Square id={i}/> </SliderItem>);

    return (
        <div style={{marginTop: "2%"}}>
            <div>
                <input type="checkbox" checked={value} onChange={() => setValue(!value)}/> Бесконечно
            </div>

            <Slider infinite={value}>
                {squares}
            </Slider>
        </div>

    );
};

export default App;
