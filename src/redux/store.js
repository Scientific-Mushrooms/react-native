import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';


const preloadedState = {

    counter: {
        count: 10,
        factor: 1
    },

    user : {
        name: null,
    }
}

const store = createStore (
    rootReducer,
    preloadedState
);

export default store;
