import React, { Component } from 'react';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import './AppHeader.scss';



class AppHeader extends Component {

    render() {
        return (
            <Router>
                <div className="header">
                    <div>
                        <h1>Mockbuster Video</h1>
                    </div>
                </div>
            </Router>
        );
    }
}

export default AppHeader;