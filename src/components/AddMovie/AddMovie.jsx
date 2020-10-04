import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyledModal } from '../Modal/Modal'
import './AddMovie.scss';
import TextField from '@material-ui/core/TextField';
import { Button, Menu, MenuItem } from '@material-ui/core';

const mapStateToProps = reduxState => ({
    genres: reduxState.genres
});



// ***THIS IS A FUNCTION COMPONENT***
function AddMovie(props) {
    console.log('Genres reduxState:', props.genres);

    //Functions for Modal responsiveness
    const [isModalOpen, setModalOpen] = useState(false);
    const hideModal = () => { setModalOpen(false); }


    // Functions for handling input fields
    const [value, setValue] = React.useState('Controlled');
    // NEED TO CONFIGURE THIS
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // For handling genre drop-down menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (props) => {
        setAnchorEl(null);
    };

    const setGenre = (value) => {

    }


    return (

        <div >
            <div>
                <button onClick={() => setModalOpen(!isModalOpen)}
                >
                    Click Me </button>
            </div>
            <StyledModal
                show={isModalOpen}
                handleClose={hideModal}
            >
                <h3>Add To Your Collection!</h3>
                <TextField
                    id="standard-textarea"
                    label="Title"
                    placeholder="Title"

                />
                <TextField
                    id="standard-textarea"
                    label="Description"
                    placeholder="Description"
                    multiline
                    fullWidth
                />

                <TextField
                    id="standard-textarea"
                    label="Poster URL"
                    placeholder="Poster URL"
                    fullWidth
                />

                <Button aria-controls="simple-menu" aria-haspopup="true"
                    onClick={handleClick}
                // onClick={() => props.changeCategory(props.id)}
                >
                    Set Category
                    </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {/* {props.category.map(category =>
                        <MenuItem
                            onClick={() => setCategory()}
                            value={category.id}
                        >{category.name}
                        </MenuItem>
                    )} */}
                </Menu>

            </StyledModal>
        </div >

    )
}



export default connect(mapStateToProps)(AddMovie);