import React, { useState } from 'react';
import Modal from 'styled-react-modal';
import { StyledModal } from '../Modal/Modal'

import './MovieComp.scss';


function MovieComp({ src }) {
    let imgStyles = {
        // width: 100 + "%",
        // // height: "auto"
    }

    const [isModalOpen, setModalOpen] = useState(false);

    const hideModal = () => {
        setModalOpen(false);
    }

    return (

        <div>
            <div
                className="poster-container"
                onClick={() => setModalOpen(!isModalOpen)}
            >
                <img src={src} alt="movie-poster"></img>
            </div>
            <StyledModal
                show={isModalOpen}
                handleClose={hideModal}
            >
                <h1>Movie Title</h1>
                <p>Details</p>
            </StyledModal>
        </div >

    )
}


export default MovieComp;





