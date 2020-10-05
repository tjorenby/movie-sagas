import React from 'react';
import './Home.scss'
import { HashRouter as Router, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Home() {

    return (
        <Router>
            <div className="nav-btns">

                <Link to='/' >
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                    >BROWSE TITLES</Button>
                </Link>
                <Link to='/AddMovie' >
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                    >ADD TITLE</Button>
                </Link>

            </div>

        </Router >
    );
}

export default Home;
