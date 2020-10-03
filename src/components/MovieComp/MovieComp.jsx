import React, { useState } from 'react';
import { StyledModal } from '../Modal/Modal'
import './MovieComp.scss';



// ***THIS IS A FUNCTION COMPONENT***
function MovieComp(props) {

    //Functions for Modal responsiveness
    const [isModalOpen, setModalOpen] = useState(false);
    const hideModal = () => { setModalOpen(false); }
    console.log('props are:', props);

    return (

        <div className="container">
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
                <p>Sci-fi | Drama | Fiction</p>
            </StyledModal>
        </div >

    )
}

export default MovieComp;





