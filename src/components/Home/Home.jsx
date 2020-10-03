import React, { Component } from 'react';
import './Home.scss'
import Slider from '../Slider/Slider';

class Home extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="card">
                {/* <div>
                    <h1>Movie Gallery</h1>

                </div> */}
                <Slider />
            </div>
        );
    }
}

export default Home;