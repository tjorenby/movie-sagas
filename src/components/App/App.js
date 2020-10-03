import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Home from '../Home/Home';
import AppHeader from '../AppHeader/AppHeader';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          {/* <AppHeader /> */}
          <Home />

        </Router>
      </div>
    );
  }
}

export default App;
