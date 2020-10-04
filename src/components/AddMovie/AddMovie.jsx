import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyledModal } from '../Modal/Modal'
import './AddMovie.scss';
import TextField from '@material-ui/core/TextField';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { useFormik } from 'formik'

const mapStateToProps = reduxState => ({
    genres: reduxState.genres
});

let genre = '';

// ***THIS IS A FUNCTION COMPONENT***
function AddMovie(props) {

    const formik = useFormik({
        initialValues: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        },

        onSubmit: values => {
            console.log('Form data is:', values);

            props.dispatch({
                type: 'ADD_MOVIE',
                payload: values
            })

        }

    })

    // console.log('Form values:', formik.values);








    // console.log('Genres reduxState:', props.genres);

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

    const setGenre = (genreId, genreName) => {
        formik.values.genre_id = genreId;
        genre = genreName;
        console.log('genre Id is:', genreId);
        console.log('genre is:', genreName);
        handleClose();
        // return category;
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
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        id="standard-textarea"
                        name="title"
                        label="Title"
                        placeholder="Title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    <TextField
                        id="standard-textarea"
                        name="description"
                        label="Description"
                        placeholder="Description"
                        multiline
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                    <TextField
                        id="standard-textarea"
                        name="poster"
                        label="Poster URL"
                        placeholder="Poster URL"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.poster}
                    />
                    <TextField
                        id="standard-textarea"
                        name={genre}
                        label="Genre"
                        placeholder={genre}
                        value={genre}
                    />

                    <Button aria-controls="simple-menu" aria-haspopup="true"
                        onClick={handleClick}
                    >
                        Set Genre
                    </Button>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {props.genres.map(genre =>
                            <MenuItem
                                onClick={() => setGenre(genre.id, genre.name)}
                            // value={genre.id}
                            >{genre.name}
                            </MenuItem>
                        )}
                    </Menu>
                    <Button type="submit">SAVE</Button>
                </form>


                <Button>CANCEL</Button>
            </StyledModal>

        </div >

    )
}



export default connect(mapStateToProps)(AddMovie);