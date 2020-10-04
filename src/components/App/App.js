import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { ModalProvider } from 'styled-react-modal'
import Home from '../Home/Home';
import AppHeader from '../AppHeader/AppHeader';
import AddMovie from '../AddMovie/AddMovie';

class App extends Component {


  componentDidMount() {
    this.getMovies();
    this.getGenres();
  }

  //Fetching from db
  getMovies = () => {
    this.props.dispatch({
      type: 'FETCH_MOVIES'
    })
  }

  getGenres = () => {
    this.props.dispatch({
      type: 'FETCH_GENRES'
    })
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <ModalProvider>
        <div className="App">
          <Router>
            <AppHeader />
            {/* <Home /> */}
            <AddMovie />

          </Router>
        </div>
      </ModalProvider>
    );
  }
}

export default connect()(App);
