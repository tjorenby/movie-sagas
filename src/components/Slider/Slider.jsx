import React, { useState } from 'react';
import './Slider.scss'
import MovieComp from '../MovieComp/MovieComp';
import { RiArrowDropRightLine } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function Slider() {

    let sliderArray = [<MovieComp src={`images/avatar.jpeg`} />, <MovieComp src={`images/gone-girl.jpg`} />, <MovieComp src={`images/the-martian.jpg`} />, <MovieComp src={`images/star-wars.jpg`} />, <MovieComp src={`images/captain-marvel.jpg`} />];
    const [x, setX] = useState(0)
    const goLeft = () => {
        console.log(x);
        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);

    };
    const goRight = () => {
        console.log(x);

        x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
    };


    return (
        <div className="slider">
            {
                sliderArray.map((item, i) => {
                    return (
                        <div key={i} className="slide" style={{
                            transform: `translateX(${x}%)`
                        }}>
                            {item}
                        </div>
                    )
                })
            }

            <button
                id="goLeft"
                onClick={goLeft}
            >
                <FaChevronLeft size="10%" />
            </button>
            <button
                id="goRight"
                onClick={goRight}
            >
                <FaChevronRight size="10%" />
            </button>
        </div>
    );
}

export default Slider;