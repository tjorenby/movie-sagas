import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import './AddMovie.scss';
import TextField from '@material-ui/core/TextField';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { useFormik } from 'formik'

const mapStateToProps = reduxState => ({
    genres: reduxState.genres
});

// Global variable used for rendering the name of genre on dom. 
let genre = '';

// ***THIS IS A FUNCTION COMPONENT***
function AddMovie(props) {

    // Using Formik (form library) to build this form function. It gathers the "onChange" values, dispatches the payload, and resets the form fields onSubmit
    const formik = useFormik({
        initialValues: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        },

        onSubmit: (values, onSubmitProps) => {
            console.log('Form data is:', values);
            props.dispatch({
                type: 'ADD_MOVIE',
                payload: values
            })

            onSubmitProps.resetForm();
        }
    })


    // ======
    // For handling genre drop-down menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (props) => {
        setAnchorEl(null);
    };

    // =======

    // sends the genre_id to Formik function and assigns the genre name to the global "genre" variable. It also triggers the "handleClose" function which closes the menu. 
    const setGenre = (genreId, genreName) => {
        formik.values.genre_id = genreId;
        genre = genreName;
        console.log('genre Id is:', genreId);
        console.log('genre is:', genreName);
        handleClose();
    }

    return (
        <Router>
            <div className="movie-card" >
                <div className="form">
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            InputProps={{ className: "text_color" }}
                            InputLabelProps={{ className: "text_color" }}
                            InputPlaceholderProps={{ className: "text_color" }}
                            id="standard-textarea"
                            name="title"
                            label="Title"
                            placeholder="Title"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                        <TextField
                            InputProps={{ className: "text_color" }}
                            InputLabelProps={{ className: "text_color" }}
                            InputPlaceholderProps={{ className: "text_color" }}
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
                            InputProps={{ className: "text_color" }}
                            InputLabelProps={{ className: "text_color" }}
                            InputPlaceholderProps={{ className: "text_color" }}
                            id="standard-textarea"
                            name="poster"
                            label="Poster URL"
                            placeholder="Poster URL"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.poster}
                        />
                        <div className="genre-field">
                            <TextField
                                InputProps={{ className: "text_color" }}
                                InputLabelProps={{ className: "text_color" }}
                                InputPlaceholderProps={{ className: "text_color" }}
                                id="standard-textarea"
                                name={genre}
                                label="Genre"
                                placeholder={genre}
                                value={genre}
                            />
                        </div>
                        <div className="genre-btn">
                            <Button
                                variant="contained"
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                                size="small"
                                className="genre-btn"
                                color="secondary"
                            >
                                SET GENRE
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
                        </div>
                        <div className="save-btn">
                            <Button
                                variant="contained"
                                type="submit"
                                color="secondary"
                            >
                                SAVE
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="cancel-btn">
                    <Link to='/' >
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                        >
                            CANCEL
                    </Button>
                    </Link>
                </div>
            </div >
        </Router>
    )
}

export default connect(mapStateToProps)(AddMovie);