import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { ModalProvider } from 'styled-react-modal'
import Home from '../Home/Home';
import AppHeader from '../AppHeader/AppHeader';
import AddMovie from '../AddMovie/AddMovie';
import Slider from '../Slider/Slider';

class App extends Component {

  componentDidMount() {
    this.getMovies();
    this.getGenres();
  }

  //Fetching Movies from db
  getMovies = () => {
    this.props.dispatch({
      type: 'FETCH_MOVIES'
    })
  }

  //Fetching Genres from db
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
            <Route path='/' exact>
              <Slider />
            </Route>

            <Route
              path='/AddMovie' exact
              component={AddMovie}
            >
              <AddMovie />
            </Route>
            <Home />
          </Router>
        </div>
      </ModalProvider>
    );
  }
}

export default connect()(App);
