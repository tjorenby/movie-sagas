import React, { useState } from 'react';
import { StyledModal } from '../Modal/Modal'
import './MovieComp.scss';



// ***THIS IS A FUNCTION COMPONENT***
function MovieComp(props) {

    //Functions for Modal responsiveness. The modal contains all of the movie description and genre data. 
    const [isModalOpen, setModalOpen] = useState(false);
    const hideModal = () => { setModalOpen(false); }
    console.log('props are:', props);
    console.log('props genres are:', props.genres);

    // This returns the poster image as well as the modal that is displayed on poster "click". The modal renders the movie description and associated genres
    return (
        <div className="container" >
            <div
                className="poster-container"
                onClick={() => setModalOpen(!isModalOpen)}
            >
                <img
                    src={props.src}
                    alt={props.title}
                    className="image"
                />
                <div className="overlay">
                    <div className="text">
                        CLICK FOR DETAILS
                    </div>
                </div>
            </div>
            <StyledModal
                show={isModalOpen}
                handleClose={hideModal}
            >
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className="genre-display">
                    {props.genres.map(item => {
                        return (
                            <div className="genre">
                                <p> ' {item} '  </p>
                            </div>
                        )
                    })}
                </div>
            </StyledModal>
        </div >

    )
}

export default MovieComp;





