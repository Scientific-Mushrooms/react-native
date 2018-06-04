import { createStore, applyMiddleware, compose } from 'redux';

import createLogger from 'redux-logger';
import rootReducer from './reducer';


const preloadedState = {

    counter: {
        count: 10,
        factor: 1
    },

    user : {
        name: '111111',
    }
}

const store = createStore (
    rootReducer,
    preloadedState,
    compose (
        applyMiddleware(createLogger)
    )
);

export default store;
