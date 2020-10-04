import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { put, takeEvery } from "redux-saga/effects";
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
// import { put } from '../server/routes/movie.router';

// ===Saga Functions===

// fetching title, poster, and description from db
function* fetchMoviesSaga(action) {
    console.log('in fetchMoviesSaga with:', action);

    let response = yield axios({
        method: 'GET',
        url: '/api/movie'
    });

    console.log('back from GET with:', response.data);

    yield put({
        type: 'SET_MOVIES',
        payload: response.data
    })
}

function* fetchGenresSaga(action) {
    console.log('in fetchGenresSaga with:', action);

    let response = yield axios({
        method: 'GET',
        url: '/api/genre'
    });

    console.log('back from GET with:', response.data);

    yield put({
        type: 'SET_GENRES',
        payload: response.data
    })
}

function* addMovieSaga(action) {
    console.log('Adding Movie:', action.payload);

    yield axios({
        method: 'POST',
        url: '/api/movie',
        data: action.payload
    });


    yield put({
        type: 'FETCH_MOVIES'
    })
}


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMoviesSaga);
    yield takeEvery('FETCH_GENRES', fetchGenresSaga);
    yield takeEvery('ADD_MOVIE', addMovieSaga);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
