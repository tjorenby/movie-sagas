import React, { Component } from 'react';
import './Home.scss'
import { HashRouter as Router, Link } from 'react-router-dom';
import AddMovie from '../AddMovie/AddMovie';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});


function Home() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const routes = ['/', '/AddMovie'];

    return (
        <Router>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab
                        label="Browse Titles"
                        component={Link}
                        to={routes[0]}
                    />
                    <Tab
                        label="Add Title"
                        component={Link}
                        to={routes[1]}
                    />

                    <Tab label="Manage Titles" />
                </Tabs>
            </Paper>
        </Router>
    );
}

export default Home;
