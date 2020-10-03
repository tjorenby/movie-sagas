import React, { useState } from 'react';
import './Slider.scss'
import PosterComp from '../PosterComp/PosterComp';
import { RiArrowDropRightLine } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function Slider() {

    let sliderArray = [<PosterComp src={`images/avatar.jpeg`} />, <PosterComp src={`images/gone-girl.jpg`} />, <PosterComp src={`images/the-martian.jpg`} />, <PosterComp src={`images/star-wars.jpg`} />, <PosterComp src={`images/captain-marvel.jpg`} />];
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