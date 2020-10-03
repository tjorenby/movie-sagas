import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { ModalProvider } from 'styled-react-modal'
import Home from '../Home/Home';
import AppHeader from '../AppHeader/AppHeader';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <ModalProvider>
        <div className="App">
          <Router>
            <AppHeader />
            <Home />

          </Router>
        </div>
      </ModalProvider>
    );
  }
}

export default App;
