import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Slider.scss'
import MovieComp from '../MovieComp/MovieComp';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const mapStateToProps = reduxState => ({
    movies: reduxState.movies
});

// ***THIS IS A FUNCTION COMPONENT*** //
function Slider(props) {


    console.log('movies from reduxState:', props.movies);

    // These functions are used for creating the carousel-effect for each component//
    const [x, setX] = useState(0)
    const goLeft = () => {
        console.log(x);
        x === 0 ? setX(-100 * (props.movies.length - 1)) : setX(x + 100);

    };
    const goRight = () => {
        console.log(x);
        x === -100 * (props.movies.length - 1) ? setX(0) : setX(x - 100);
    };


    return (
        <div className="slider">
            {
                props.movies.map((item, i) => {
                    return (
                        <div key={i} className="slide" style={{
                            transform: `translateX(${x}%)`
                        }}>
                            <MovieComp
                                src={props.movies[i].poster}
                                description={props.movies[i].description}
                                title={props.movies[i].title}
                                id={props.movies[i].id}
                                genres={props.movies[i].genres}
                            />
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

export default connect(mapStateToProps)(Slider);
