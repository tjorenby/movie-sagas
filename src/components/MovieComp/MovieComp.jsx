import React, { useState } from 'react';
import Modal from 'styled-react-modal';
import { StyledModal } from '../Modal/Modal'

import './MovieComp.scss';


function MovieComp({ src }) {

    const [isModalOpen, setModalOpen] = useState(false);

    const hideModal = () => {
        setModalOpen(false);
    }

    return (

        <div className="container">
            <div
                className="poster-container"
                onClick={() => setModalOpen(!isModalOpen)}
            >
                <img
                    src={src}
                    alt="movie-poster"
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
                <h2>Avatar</h2>
                <p>Avatar (marketed as James Cameron's Avatar) is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron, and stars Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the mineral unobtanium, a room-temperature superconductor. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. The film's title refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.</p>
                <p>Sci-fi | Drama | Fiction</p>
            </StyledModal>
        </div >

    )
}


export default MovieComp;





